import * as React from "react";
import { NextComponentType, NextPageContext } from "next";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	InMemoryCacheConfig,
	from,
	HttpLink,
	HttpOptions,
} from "@apollo/client";
import fetch from "isomorphic-unfetch";

const customFetch = (uri: string, options: any) => {
	const { operationName } = JSON.parse(options.body);
	return fetch(`${uri}?opname=${operationName}`, options);
};

const cacheConfig = {
	typePolicies: {
		// Order: {
		//   keyFields: ['orderID'],
		// },
		// Employee: {
		//   keyFields: false, // ['_id', 'firstName'],
		// },
		// Customer: {
		//   keyFields: ['customerID'],
		// },
		// CustomerAddress: {
		//   keyFields: ['city'],
		// },
		// Employee: {
		//   keyFields: ['lastName'],
		// },
	},
} as InMemoryCacheConfig;

interface WithApolloProps {
	apolloClient: ApolloClient<any> | null;
	apolloState: any;
	[key: string]: any;
}

export interface WithApolloContext extends NextPageContext {
	apolloClient: ApolloClient<any>;
}

export function withApollo(
	PageComponent: NextComponentType<any, any, any>,
	{ ssr = true } = {},
) {
	const WithApollo = ({
		apolloClient,
		apolloState,
		...pageProps
	}: WithApolloProps) => {
		const client = apolloClient || initApolloClient(apolloState);
		return (
			<ApolloProvider client={client}>
				<PageComponent {...pageProps} />
			</ApolloProvider>
		);
	};

	if (process.env.NODE_ENV !== "production") {
		const displayName =
			PageComponent.displayName || PageComponent.name || "Component";

		if (displayName === "App") {
			console.warn("This withApollo HOC only works with PageComponents.");
		}

		WithApollo.displayName = `withApollo(${displayName})`;
	}

	if (ssr || PageComponent.getInitialProps) {
		WithApollo.getInitialProps = async (ctx: WithApolloContext) => {
			const { AppTree, req, res } = ctx;

			const fetchOptions: any = {};

			if (req) {
				const cookie = req.headers["cookie"];
				const origin = req.headers["origin"];
				fetchOptions.headers = { cookie, origin };
			}

			const apolloClient = (ctx.apolloClient = initApolloClient(
				{},
				fetchOptions,
				ctx,
			));

			let pageProps = {};
			if (PageComponent.getInitialProps) {
				pageProps = await PageComponent.getInitialProps(ctx);
			}

			if (typeof window === "undefined") {
				if (res && res.finished) {
					return pageProps;
				}

				if (ssr) {
					try {
						const { getDataFromTree } = await import("@apollo/react-ssr");
						await getDataFromTree(
							<AppTree
								pageProps={{
									...pageProps,
									apolloClient,
								}}
							/>,
						);
					} catch (error) {
						console.error("Error while running `getDataFromTree`", error);
					}

					// getDataFromTree does not call componentWillUnmount
					// head side effect therefore need to be cleared manually
					// Head.rewind();
				}
			}

			const apolloState = apolloClient.cache.extract();

			return {
				...pageProps,
				apolloState,
			};
		};
	}

	return WithApollo;
}

let apolloClientInBrowser: ApolloClient<any> | null = null;

export function initApolloClient(
	initialState: Record<string, any> = {},
	fetchOptions: Record<string, any> = {},
	ctx?: NextPageContext,
) {
	// for SSR create every time new ApolloClient
	if (typeof window === "undefined") {
		return createApolloClient(initialState, fetchOptions, ctx);
	}

	// for Browser try to reuse global instance
	if (!apolloClientInBrowser) {
		apolloClientInBrowser = createApolloClient(initialState, {}, ctx);
	}

	if (typeof window !== "undefined") (window as any).ac = apolloClientInBrowser;

	return apolloClientInBrowser;
}

function createApolloClient(
	initialState: Record<string, any> = {},
	{ headers }: Record<string, any> = {},
	_ctx?: NextPageContext,
) {
	const linkOptions: HttpOptions = {
		uri: `${process.env.WORDPRESS_API_URL}/graphql`,
		credentials: "same-origin", // 'include',
		fetch: customFetch,
	};
	if (headers) linkOptions.headers = headers;
	const httpLink = new HttpLink(linkOptions);

	let combinedTransportLink: any = httpLink;

	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: from([
			// redirectUnauthorizedLink,
			// httpLink,
			combinedTransportLink,
		]),
		cache: new InMemoryCache(cacheConfig).restore(initialState),
		connectToDevTools: process.env.NODE_ENV !== "production",
	});
}

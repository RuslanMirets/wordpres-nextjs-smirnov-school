import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import { NextPageContext } from "next";
import { AppContext } from "next/app";

// import { NextPageContext } from "next";
// declare module "next" {
// 	export interface NextPageContext {
// 		apolloState?: any;
// 	}
// }

interface NextPageContextWithApollo extends NextPageContext {
	apolloClient: ApolloClient<NormalizedCacheObject> | null;
	apolloState: NormalizedCacheObject;
	ctx: NextPageContextApp;
}

type NextPageContextApp = NextPageContextWithApollo & AppContext;

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let CLIENT: ApolloClient<NormalizedCacheObject> | undefined;

export function getApolloClient(forceNew?: any) {
	if (!CLIENT || forceNew) {
		CLIENT = new ApolloClient({
			ssrMode: isServer,
			uri: `${process.env.WORDPRESS_API_URL}/graphql`,
			cache: new InMemoryCache().restore(windowApolloState || {}),

			/**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
		});
	}

	return CLIENT;
}

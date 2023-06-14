import { useApollo } from "@/src/apollo/apolloClient";
import client from "@/src/apollo/client";
import Loader from "@/src/components/loader/Loader";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={client}>
			<SessionProvider>
				<Loader />
				<Component {...pageProps} />
			</SessionProvider>
		</ApolloProvider>
	);
}

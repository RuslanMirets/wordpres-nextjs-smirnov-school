import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { getApolloClient } from "@/src/apollo/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = getApolloClient();

	return (
		<ApolloProvider client={apolloClient}>
			<SessionProvider>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</SessionProvider>
		</ApolloProvider>
	);
}

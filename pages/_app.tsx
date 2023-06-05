import client from "@/src/apollo/client";
import Loader from "@/src/components/loader/Loader";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Loader />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

import Loader from "@/src/components/loader/Loader";
import { queryClientConfig } from "@/src/config/query-client.config";
import "@/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig));

	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider>
				<Loader />
				<Component {...pageProps} />
			</SessionProvider>
		</QueryClientProvider>
	);
}

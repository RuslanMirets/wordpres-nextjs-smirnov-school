import Loader from "@/src/components/loader/Loader";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Loader />
			<Component {...pageProps} />
		</>
	);
}

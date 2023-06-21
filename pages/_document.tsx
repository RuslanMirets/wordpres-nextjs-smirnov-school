import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/document";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { getApolloClient } from "@/src/apollo/apolloClient";

class DocumentWithApollo extends Document {
	constructor(props: any) {
		super(props);

		const { __NEXT_DATA__, apolloState } = props;
		__NEXT_DATA__.apolloState = apolloState;
	}

	static async getInitialProps(ctx: any) {
		const apolloClient = getApolloClient(true);

		await getDataFromTree(<ctx.AppTree {...ctx.appProps} />);

		const initialProps = await Document.getInitialProps(ctx);

		const apolloState = apolloClient.extract();

		return { ...initialProps, apolloState };
	}
}

export default class MyDocument extends DocumentWithApollo {
	render() {
		return (
			<Html lang="ru">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

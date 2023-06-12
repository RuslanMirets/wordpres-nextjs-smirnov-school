import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
	uri: `${process.env.WORDPRESS_API_URL}/graphql`,
	credentials: "same-origin",
});

const client = new ApolloClient({
	ssrMode: true,
	cache: new InMemoryCache(),
	link: httpLink,
	connectToDevTools: true,
});

export default client;

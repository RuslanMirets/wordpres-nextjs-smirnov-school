import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: `${process.env.WORDPRESS_API_URL}/graphql`,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

export default client;

import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import { PostApollo } from "@/src/apollo/post.apollo";
import Search from "@/src/screens/search/Search";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const SearchPage = () => {
	const { query } = useRouter();

	const { data } = useQuery(PostApollo.GET_BY_SEARCH, {
		variables: { search: `${query.query}` },
	});

	const posts = data.posts.nodes || [];

	return <Search posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query.query as string;

	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PostApollo.GET_BY_SEARCH,
		variables: { search: `${query}` },
	});

	console.log(query);

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default SearchPage;

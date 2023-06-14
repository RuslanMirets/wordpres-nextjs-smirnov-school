import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import { PostApollo } from "@/src/apollo/post.apollo";
import Search from "@/src/screens/search/Search";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async (
	ctx: GetServerSidePropsContext,
) => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PostApollo.GET_BY_SEARCH,
		variables: { search: `${ctx.query.query}` },
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

const SearchPage = () => {
	return <Search />;
};

export default SearchPage;

import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import Search from "@/src/screens/search/Search";
import { PostPreviewType } from "@/src/types/post.interface";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async (
	ctx: GetServerSidePropsContext,
) => {
	const { data } = await client.query({
		query: PostApollo.GET_BY_SEARCH,
		variables: { search: `${ctx.query.query}` },
	});

	return {
		props: {
			posts: data.posts.nodes,
		},
	};
};

const SearchPage = ({ posts }: PostPreviewType) => {
	return <Search posts={posts} />;
};

export default SearchPage;

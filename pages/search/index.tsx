import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post";
import Search from "@/src/screens/search/Search";
import { IPostPreview } from "@/src/types/post.interface";
import { GetServerSideProps } from "next";

type Props = {
	posts: IPostPreview[];
};

const SearchPage = ({ posts }: Props) => {
	return <Search posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query.query as string;
	const { data } = await client.query({
		query: PostApollo.GET_BY_SEARCH,
		variables: { search: `${query}` },
	});

	return {
		props: {
			posts: data.posts.nodes,
		},
	};
};

export default SearchPage;

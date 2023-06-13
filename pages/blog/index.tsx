import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import Blog from "@/src/screens/blog/Blog";
import { IPostPreview } from "@/src/types/post.interface";
import { GetServerSideProps } from "next";

type Props = {
	posts: IPostPreview[];
};

const BlogPage = ({ posts }: Props) => {
	return <Blog posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query({ query: PostApollo.GET_ALL });

	return {
		props: {
			posts: data.posts.nodes,
		},
	};
};

export default BlogPage;

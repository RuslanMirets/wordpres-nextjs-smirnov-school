import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import Blog from "@/src/screens/blog/Blog";
import { IPostPreview, PostPreviewType } from "@/src/types/post.interface";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query({ query: PostApollo.GET_ALL });

	return {
		props: {
			posts: data.posts.nodes,
		},
	};
};

const BlogPage = ({ posts }: PostPreviewType) => {
	return <Blog posts={posts} />;
};

export default BlogPage;

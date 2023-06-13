import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import Blog from "@/src/screens/blog/Blog";
import { IPostPreview } from "@/src/types/post.interface";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	// const { data } = await client.query({ query: PostApollo.GET_ALL });

	// return {
	// 	props: {
	// 		posts: data.posts.nodes,
	// 	},
	// };

	const apolloClient = initializeApollo({});

	await apolloClient.query({ query: PostApollo.GET_ALL });

	return addApolloState(apolloClient, {
		props: {},
	});
};

const BlogPage = () => {
	return <Blog />;
};

export default BlogPage;

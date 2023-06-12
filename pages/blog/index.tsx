import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import Blog from "@/src/screens/blog/Blog";
import { IPostPreview } from "@/src/types/post.interface";
import { useQuery } from "@apollo/client";
import { GetStaticProps, GetStaticPropsContext } from "next";

const BlogPage = () => {
	const { data } = useQuery(PostApollo.GET_ALL, {
		notifyOnNetworkStatusChange: true,
	});

	return <Blog posts={data.posts.nodes} />;
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext,
) => {
	// const { data } = await client.query({ query: PostApollo.GET_ALL });

	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PostApollo.GET_ALL,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default BlogPage;

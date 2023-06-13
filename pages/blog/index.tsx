import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import { PostApollo } from "@/src/apollo/post.apollo";
import Blog from "@/src/screens/blog/Blog";
import { useQuery } from "@apollo/client";
import { GetStaticProps } from "next";

const BlogPage = () => {
	const { data } = useQuery(PostApollo.GET_ALL);

	const posts = data.posts.nodes || [];

	return <Blog posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: PostApollo.GET_ALL });

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default BlogPage;

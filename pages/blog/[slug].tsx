import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import Post from "@/src/screens/post/Post";
import { IPostPreview, PostType } from "@/src/types/post.interface";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await client.query({ query: PostApollo.GET_ALL });

	const posts: IPostPreview[] = data.posts.nodes;

	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = context.params?.slug as string;

	const { data } = await client.query({
		query: PostApollo.GET_BY_SLUG,
		variables: { id: `${slug}` },
	});

	return {
		props: {
			post: data.post,
		},
	};
};

const PostPage = ({ post }: PostType) => {
	return <Post post={post} />;
};

export default PostPage;

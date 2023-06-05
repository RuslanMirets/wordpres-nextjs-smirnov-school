import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post";
import Post from "@/src/screens/post/Post";
import { IPost, IPostPreview } from "@/src/types/post.interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IPostPage {
	post: IPost;
}

const PostPage: NextPage<IPostPage> = ({ post }) => {
	return <Post post={post} />;
};

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

export default PostPage;

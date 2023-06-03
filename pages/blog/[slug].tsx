import Post from "@/src/screens/post/Post";
import { getPostBySlug, getPosts } from "@/src/services/post.service";
import { IPost } from "@/src/types/post.interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IPostPage {
	post: IPost;
}

const PostPage: NextPage<IPostPage> = ({ post }) => {
	return <Post post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPosts();

	// создаём массив путей для каждого поста
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
	const post = await getPostBySlug(slug);

	return {
		props: {
			post,
		},
	};
};

export default PostPage;

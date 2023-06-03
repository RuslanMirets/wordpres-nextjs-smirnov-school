import Post from "@/src/screens/post/Post";
import { PostService } from "@/src/services/post.service";
import { IPost } from "@/src/types/post.interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IPostPage {
	post: IPost;
}

const PostPage: NextPage<IPostPage> = ({ post }) => {
	return <Post post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await PostService.getPosts();

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
	const post = await PostService.getPostBySlug(slug);

	return {
		props: {
			post,
		},
	};
};

export default PostPage;

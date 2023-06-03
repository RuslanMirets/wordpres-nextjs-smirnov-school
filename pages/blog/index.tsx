import Blog from "@/src/screens/blog/Blog";
import { PostService } from "@/src/services/post.service";
import { IPostPreview } from "@/src/types/post.interface";
import { GetServerSideProps, NextPage } from "next";

interface IBlog {
	posts: IPostPreview[];
}

const BlogPage: NextPage<IBlog> = ({ posts }) => {
	return <Blog posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const posts: IPostPreview[] = await PostService.getPosts();

	return {
		props: {
			posts,
		},
	};
};

export default BlogPage;

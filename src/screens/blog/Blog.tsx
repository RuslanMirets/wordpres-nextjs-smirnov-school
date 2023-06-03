import Layout from "@/src/components/Layout";
import Container from "@/src/components/container/Container";
import { IPostPreview } from "@/src/types/post.interface";
import { FC } from "react";
import SearchForm from "@/src/components/search/SearchForm";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/components/heading/Heading";

interface IBlog {
	posts: IPostPreview[];
}

const Blog: FC<IBlog> = ({ posts }) => {
	return (
		<Layout title="Блог">
			<Container>
				<Heading>Блог</Heading>
				<SearchForm />
				<PostsList posts={posts} />
			</Container>
		</Layout>
	);
};

export default Blog;

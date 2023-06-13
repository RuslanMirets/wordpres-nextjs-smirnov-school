import Layout from "@/src/components/Layout";
import { IPostPreview } from "@/src/types/post.interface";
import SearchForm from "@/src/components/search/SearchForm";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";

const Blog = () => {
	return (
		<Layout title="Блог">
			<Container>
				<Heading>Блог</Heading>
				<SearchForm />
				<PostsList />
			</Container>
		</Layout>
	);
};

export default Blog;

import Layout from "@/src/components/Layout";
import { IPostPreview } from "@/src/types/post.interface";
import SearchForm from "@/src/components/search/SearchForm";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";

type Props = {
	posts: IPostPreview[];
};

const Blog = ({ posts }: Props) => {
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

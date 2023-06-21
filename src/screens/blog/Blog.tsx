import Layout from "@/src/components/Layout";
import SearchForm from "@/src/components/search/SearchForm";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";
import { useQuery } from "@apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import { IPostPreview } from "@/src/types/post.interface";

const Blog = () => {
	const { data } = useQuery(PostApollo.GET_ALL);

	const posts: IPostPreview[] = data?.posts.nodes;

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

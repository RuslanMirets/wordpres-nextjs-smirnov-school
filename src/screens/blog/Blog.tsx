import Layout from "@/src/components/Layout";
import SearchForm from "@/src/components/search/SearchForm";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";
import { useQuery } from "@tanstack/react-query";
import { PostService } from "@/src/services/post.service";

const Blog = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: PostService.getAll,
	});
	const posts = data?.data.posts.nodes || [];

	return (
		<Layout title="Блог">
			<Container>
				<Heading>Блог</Heading>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<SearchForm />
						<div className="mb-5">
							<div>queryCount: {data.extensions.queryLog.queryCount}</div>
							<div>totalTime: {data.extensions.queryLog.totalTime}</div>
						</div>
						<PostsList posts={posts} />
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Blog;

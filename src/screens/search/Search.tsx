import Layout from "@/src/components/Layout";
import SearchForm from "@/src/components/search/SearchForm";
import { PostPreviewType } from "@/src/types/post.interface";
import { useRouter } from "next/router";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";

const Search = ({ posts }: PostPreviewType) => {
	const { query } = useRouter();

	return (
		<Layout title="Поиск">
			<Container>
				<Heading>Поиск{query.query !== "" && `: «${query.query}»`}</Heading>
				<SearchForm />
				{posts.length == 0 ? (
					<div>Статей не найдено</div>
				) : (
					<PostsList posts={posts} />
				)}
			</Container>
		</Layout>
	);
};

export default Search;

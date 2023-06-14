import Layout from "@/src/components/Layout";
import SearchForm from "@/src/components/search/SearchForm";
import { IPostPreview } from "@/src/types/post.interface";
import { useRouter } from "next/router";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";
import { useQuery } from "@apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";

const Search = () => {
	const { query } = useRouter();

	const { data } = useQuery(PostApollo.GET_BY_SEARCH, {
		variables: { search: `${query.query}` },
	});

	const posts: IPostPreview[] = data?.posts.nodes;

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

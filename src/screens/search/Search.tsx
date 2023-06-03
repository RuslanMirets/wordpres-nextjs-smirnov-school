import Layout from "@/src/components/Layout";
import Container from "@/src/components/container/Container";
import SearchForm from "@/src/components/search/SearchForm";
import { FC } from "react";
import { IPostPreview } from "@/src/types/post.interface";
import { useRouter } from "next/router";
import PostsList from "@/src/components/posts-list/PostsList";
import Heading from "@/src/components/heading/Heading";

interface ISearch {
	posts: IPostPreview[];
}

const Search: FC<ISearch> = ({ posts }) => {
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

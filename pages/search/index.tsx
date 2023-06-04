import Search from "@/src/screens/search/Search";
import { PostService } from "@/src/services/post.service";
import { IPostPreview } from "@/src/types/post.interface";
import { GetServerSideProps, NextPage } from "next";

interface ISearch {
	posts: IPostPreview[];
}

const SearchPage: NextPage<ISearch> = ({ posts }) => {
	return <Search posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query.query as string;
	const posts: IPostPreview[] = await PostService.getBySearch(query);

	return {
		props: {
			posts,
		},
	};
};

export default SearchPage;

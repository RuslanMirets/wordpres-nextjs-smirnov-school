import { PostApollo } from "@/src/apollo/post.apollo";
import { withApollo } from "@/src/apollo/withApollo";
import Layout from "@/src/components/Layout";
import PostsList from "@/src/components/posts-list/PostsList";
import { AllPlanetsDocument, AllPlanetsQuery } from "@/src/gql/graphql";
import { IPostPreview } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";

const TestPage = () => {
	const { data, loading } = useQuery(PostApollo.GET_ALL);
	const posts: IPostPreview[] = data?.posts.nodes;

	// const { data, loading } = useQuery<AllPlanetsQuery>(AllPlanetsDocument);
	// const planets = data?.allPlanets?.planets;

	return (
		<Layout title="Тест">
			<Container>
				<Heading>Тест</Heading>
				{/* {loading ? <div>Loading...</div> : <PostsList posts={posts} />} */}

				{/* {loading ? (
					<div>Loading...</div>
				) : (
					<ul>
						{planets?.map((item) => (
							<li key={item?.id}>{item?.name}</li>
						))}
					</ul>
				)} */}
			</Container>
		</Layout>
	);
};

export default withApollo(TestPage);

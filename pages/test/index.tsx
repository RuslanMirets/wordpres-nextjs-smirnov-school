import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import { PostApollo } from "@/src/apollo/post.apollo";
import Layout from "@/src/components/Layout";
import PostsList from "@/src/components/posts-list/PostsList";
import { IPostPreview } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { gql, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import React from "react";

export const ALL_PLANETS = gql`
	query AllPlanets {
		allPlanets {
			planets {
				id
				name
			}
		}
	}
`;

export const getServerSideProps: GetServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PostApollo.GET_ALL,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

const TestPage = () => {
	// const { data } = useQuery(ALL_PLANETS);
	// const planets: any[] = data?.allPlanets.planets;

	const { data } = useQuery(PostApollo.GET_ALL);
	const posts: IPostPreview[] = data?.posts.nodes;

	return (
		<Layout title="Тест">
			<Container>
				<Heading>Тест</Heading>
				<PostsList posts={posts} />
				{/* <ul>
					{posts.map((item) => (
						<li key={item.databaseId}>{item.title}</li>
					))}
				</ul> */}
			</Container>
		</Layout>
	);
};

export default TestPage;

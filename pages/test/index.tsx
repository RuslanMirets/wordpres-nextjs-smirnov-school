import { PostApollo } from "@/src/apollo/post.apollo";
import Layout from "@/src/components/Layout";
import PostsList from "@/src/components/posts-list/PostsList";
import { IPostPreview } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import React from "react";

const TestPage = () => {
	const { data, loading } = useQuery(PostApollo.GET_ALL);

	const posts: IPostPreview[] = data?.posts.nodes;

	return (
		<Layout title="Тест">
			<Container>
				<Heading>Тест</Heading>
				{loading ? <div>Loading...</div> : <PostsList posts={posts} />}
			</Container>
		</Layout>
	);
};

export default TestPage;

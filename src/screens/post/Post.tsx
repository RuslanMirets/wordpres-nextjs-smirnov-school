import Layout from "@/src/components/Layout";
import { IPost } from "@/src/types/post.interface";
import styles from "./Post.module.scss";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";

const Post = () => {
	const { query } = useRouter();

	const { data, loading } = useQuery(PostApollo.GET_BY_SLUG, {
		variables: { id: `${query.slug}` },
	});

	const post: IPost = data?.post;

	return (
		<Layout title={post.title}>
			<Container>
				{loading ? (
					<div>Loading...</div>
				) : (
					<article>
						<Heading>{post.title}</Heading>
						<div
							className={styles.content}
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
					</article>
				)}
			</Container>
		</Layout>
	);
};

export default Post;

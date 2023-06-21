import Layout from "@/src/components/Layout";
import { IPost, PostType } from "@/src/types/post.interface";
import styles from "./Post.module.scss";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";
import { useQuery } from "@apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import { useRouter } from "next/router";

const Post = () => {
	const { query } = useRouter();

	const { data, loading } = useQuery(PostApollo.GET_BY_SLUG, {
		variables: { id: query.slug },
	});

	const post: IPost = data?.post;

	if (loading) return <div>Loading...</div>;

	return (
		<Layout title={post?.title || ""}>
			<Container>
				<article>
					<Heading>{post.title}</Heading>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</Container>
		</Layout>
	);
};

export default Post;

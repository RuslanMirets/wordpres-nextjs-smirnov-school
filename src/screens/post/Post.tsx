import Layout from "@/src/components/Layout";
import { PostType } from "@/src/types/post.interface";
import styles from "./Post.module.scss";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";

const Post = ({ post }: PostType) => {
	return (
		<Layout title={post.title}>
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

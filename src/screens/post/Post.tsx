import Layout from "@/src/components/Layout";
import { IPost } from "@/src/types/post.interface";
import styles from "./Post.module.scss";
import Heading from "@/src/ui/heading/Heading";
import Container from "@/src/ui/container/Container";

type Props = {
	post: IPost;
};

const Post = ({ post }: Props) => {
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

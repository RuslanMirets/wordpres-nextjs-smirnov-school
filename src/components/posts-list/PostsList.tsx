import styles from "./PostsList.module.scss";
import { IPostPreview } from "@/src/types/post.interface";
import PostPreview from "../post-preview/PostPreview";

type Props = {
	posts: IPostPreview[];
};

const PostsList = ({ posts }: Props) => {
	return (
		<ul className={styles.root}>
			{posts.map((post) => (
				<li key={post.slug}>
					<PostPreview post={post} />
				</li>
			))}
		</ul>
	);
};

export default PostsList;

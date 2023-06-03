import { IPostPreview } from "@/src/types/post.interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./PostPreview.module.scss";

interface IPost {
	post: IPostPreview;
}

const PostPreview: FC<IPost> = ({ post }) => {
	return (
		<Link className={styles.root} href={`/blog/${post.slug}`}>
			<Image
				className={styles.image}
				src={post.featuredImage.node.sourceUrl}
				width={300}
				height={300}
				alt={post.title}
			/>
			<div className={styles.content}>
				<h3 className={styles.title}>{post.title}</h3>
			</div>
		</Link>
	);
};

export default PostPreview;

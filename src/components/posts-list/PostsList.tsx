import styles from "./PostsList.module.scss";
import { IPostPreview } from "@/src/types/post.interface";
import PostPreview from "../post-preview/PostPreview";
import { useState } from "react";

type Props = {
	posts: IPostPreview[];
};

const PostsList = ({ posts }: Props) => {
	const [query, setQuery] = useState("");

	return (
		<div>
			<input
				className=" mb-5 border border-black px-3 py-2"
				placeholder="Поиск..."
				onChange={(event) => setQuery(event.target.value)}
			/>
			<ul className={styles.root}>
				{posts
					.filter((post) => {
						if (query === "") {
							return post;
						} else if (
							post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
						) {
							return post;
						}
					})
					.map((post) => (
						<li key={post.slug}>
							<PostPreview post={post} />
						</li>
					))}
				{/* {posts.map((post) => (
					<li key={post.slug}>
						<PostPreview post={post} />
					</li>
				))} */}
			</ul>
		</div>
	);
};

export default PostsList;

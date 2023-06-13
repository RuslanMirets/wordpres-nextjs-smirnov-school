import styles from "./PostsList.module.scss";
import { IPostPreview } from "@/src/types/post.interface";
import PostPreview from "../post-preview/PostPreview";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";

const PostsList = () => {
	const [query, setQuery] = useState("");

	const { data } = useQuery(PostApollo.GET_ALL);
	const posts: IPostPreview[] = data.posts.nodes;

	console.log(data);

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

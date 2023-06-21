import client from "@/src/apollo/client";
import { PostApollo } from "@/src/apollo/post.apollo";
import { withApollo } from "@/src/apollo/withApollo";
import Post from "@/src/screens/post/Post";
import { PostType } from "@/src/types/post.interface";
import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const slug = context.params?.slug as string;

// 	const { data } = await client.query({
// 		query: PostApollo.GET_BY_SLUG,
// 		variables: { id: `${slug}` },
// 	});

// 	return {
// 		props: {
// 			post: data.post,
// 		},
// 	};
// };

const PostPage = () => {
	return <Post />;
};

export default withApollo(PostPage);

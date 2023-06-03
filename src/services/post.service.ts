import { fetchData } from "../api/wp-api";
import { IPost, IPostPreview } from "../types/post.interface";

export const getPosts = async () => {
	const data = await fetchData(`
    query getPosts{
      posts(where: {categoryNotIn: "366"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    } 	
  `);

	return data.posts.nodes as IPostPreview[];
};

export const getPostBySlug = async (slug: string) => {
	const data = await fetchData(`
    query getPostBySlug {
			post(id: "${slug}", idType: SLUG) {
				title
        content
			}
    } 	
  `);
	return data.post as IPost;
};

export const getPostBySearch = async (term: string) => {
	const data = await fetchData(`
  query getPosts{
    posts(where: {search: "${term}"}) {
      nodes {
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  } 	
`);
	return data.posts.nodes as IPostPreview[];
};

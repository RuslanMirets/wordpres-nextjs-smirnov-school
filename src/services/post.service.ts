import { fetchData } from "../api/wp-api";
import { IPost, IPostPreview } from "../types/post.interface";

export const PostService = {
	async getPosts() {
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
	},

	async getPostBySlug(slug: string) {
		const data = await fetchData(`
    query getPostBySlug {
			post(id: "${slug}", idType: SLUG) {
				title
        content
			}
    } 	
  `);
		return data.post as IPost;
	},

	async getPostBySearch(term: string) {
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
	},
};

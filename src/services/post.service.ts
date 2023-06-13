import { fetchData } from "../api/wp-api";

export const PostService = {
	async getAll() {
		const data = await fetchData(`
    query getAll{
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
		return data;
	},

	async getBySlug(slug: string) {
		const data = await fetchData(`
    query getBySlug {
			post(id: "${slug}", idType: SLUG) {
				title
        content
			}
    } 	
  `);
		return data;
	},

	async getBySearch(term: string) {
		const data = await fetchData(`
    query getBySearch{
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
		return data;
	},
};

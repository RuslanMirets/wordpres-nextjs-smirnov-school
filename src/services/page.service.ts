import { fetchData } from "../api/wp-api";
import { IPage } from "../types/page.interface";

export async function getPageBySlug() {
	const data = await fetchData(`
    query getPageBySlug {
			page(id: "cgb", idType: URI) {
        title
        rm {
          introTitle
          introDesc
          workList {
            workListName
            workListImg {
              sourceUrl
            }
          }
        }
      }
    } 	
  `);
	return data.page as IPage;
}
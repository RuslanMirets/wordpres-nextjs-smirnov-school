import { gql } from "@apollo/client";

export const PageApollo = {
	GET_CGB: gql`
		query getCGB {
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
	`,
};

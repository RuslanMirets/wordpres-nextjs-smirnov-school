import { gql } from "@apollo/client";

export const UserApollo = {
	LOGIN_USER: gql`
		mutation LoginUser($username: String!, $password: String!) {
			login(input: { username: $username, password: $password }) {
				user {
					id
					userId
					firstName
					lastName
					username
					email
					avatar {
						url
					}
					roles {
						nodes {
							name
						}
					}
				}
			}
		}
	`,
};

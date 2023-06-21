import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
	documents: ["graphql/**/*.graphql"],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./src/gql/": {
			preset: "client",
		},
	},
};

export default config;

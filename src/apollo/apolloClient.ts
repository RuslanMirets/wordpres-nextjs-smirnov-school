import { NEXT_DATA } from "next/dist/shared/lib/utils";
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";

interface NextDataWithApolloState extends NEXT_DATA {
	apolloState?: any;
}

const isServer = typeof window === "undefined";

// const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;
const windowApolloState =
	!isServer && (window.__NEXT_DATA__ as NextDataWithApolloState).apolloState;

let CLIENT: ApolloClient<NormalizedCacheObject> | undefined;

export function getApolloClient(forceNew?: any) {
	if (!CLIENT || forceNew) {
		CLIENT = new ApolloClient({
			ssrMode: isServer,
			uri: `${process.env.WORDPRESS_API_URL}/graphql`,
			cache: new InMemoryCache().restore(windowApolloState || {}),

			/**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
		});
	}

	return CLIENT;
}

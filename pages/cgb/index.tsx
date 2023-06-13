import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import { PageApollo } from "@/src/apollo/page.apollo";
import CGB from "@/src/screens/cgb/CGB";
import { useQuery } from "@apollo/client";
import { GetStaticProps } from "next";

const CGBPage = () => {
	const { data } = useQuery(PageApollo.GET_CGB);

	return <CGB page={data.page} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: PageApollo.GET_CGB });

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default CGBPage;

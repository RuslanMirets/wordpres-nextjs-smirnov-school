import { addApolloState, initializeApollo } from "@/src/apollo/apolloClient";
import { PageApollo } from "@/src/apollo/page.apollo";
import CGB from "@/src/screens/cgb/CGB";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PageApollo.GET_CGB,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

const CGBPage = () => {
	return <CGB />;
};

export default CGBPage;

import { initializeApollo, addApolloState } from "@/src/apollo/apolloClient";
import { ProductApollo } from "@/src/apollo/product.apollo";
import Products from "@/src/screens/products/Products";
import { GetServerSideProps } from "next";

const ProductsPage = () => {
	return <Products />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: ProductApollo.GET_ALL });

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default ProductsPage;

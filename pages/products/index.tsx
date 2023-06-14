import client from "@/src/apollo/client";
import { ProductApollo } from "@/src/apollo/product.apollo";
import Products from "@/src/screens/products/Products";
import { ProductsType } from "@/src/types/product.interface";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query({ query: ProductApollo.GET_ALL });

	return {
		props: {
			products: data.products.nodes,
		},
	};
};

const ProductsPage = ({ products }: ProductsType) => {
	return <Products products={products} />;
};

export default ProductsPage;

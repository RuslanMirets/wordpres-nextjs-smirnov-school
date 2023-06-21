import { ProductApollo } from "@/src/apollo/product.apollo";
import Layout from "@/src/components/Layout";
import ProductCard from "@/src/components/product-card/ProductCard";
import { IProducts, ProductsType } from "@/src/types/product.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@apollo/client";

const Products = () => {
	const { data } = useQuery(ProductApollo.GET_ALL);

	const products: IProducts[] = data?.products.nodes;

	return (
		<Layout title="Товары">
			<Container>
				<Heading>Товары</Heading>
				<ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-xs mx-auto sm:max-w-none">
					{products.map((product) => (
						<li key={product.databaseId}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	);
};

export default Products;

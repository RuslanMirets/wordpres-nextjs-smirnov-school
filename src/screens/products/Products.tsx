import Layout from "@/src/components/Layout";
import ProductCard from "@/src/components/product-card/ProductCard";
import { ProductsType } from "@/src/types/product.interface";
import Container from "@/src/ui/container/Container";

const Products = ({ products }: ProductsType) => {
	return (
		<Layout title="Товары">
			<Container>
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

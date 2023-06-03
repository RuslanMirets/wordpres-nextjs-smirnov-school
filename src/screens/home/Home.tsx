import Layout from "@/src/components/Layout";
import Container from "@/src/components/container/Container";
import Heading from "@/src/components/heading/Heading";
import { FC } from "react";

const Home: FC = () => {
	return (
		<Layout title="Главная">
			<Container>
				<Heading>Главная</Heading>
			</Container>
		</Layout>
	);
};

export default Home;

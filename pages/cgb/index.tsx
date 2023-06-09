import client from "@/src/apollo/client";
import { PageApollo } from "@/src/apollo/page.apollo";
import CGB from "@/src/screens/cgb/CGB";
import { IPage } from "@/src/types/page.interface";
import { GetStaticProps } from "next";

type Props = {
	page: IPage;
};

const CGBPage = ({ page }: Props) => {
	return <CGB page={page} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query({ query: PageApollo.GET_CGB });

	return {
		props: {
			page: data.page,
		},
	};
};

export default CGBPage;

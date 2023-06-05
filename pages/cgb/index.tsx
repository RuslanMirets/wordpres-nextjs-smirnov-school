import client from "@/src/apollo/client";
import { PageApollo } from "@/src/apollo/page";
import CGB from "@/src/screens/cgb/CGB";
import { IPage } from "@/src/types/page.interface";
import { GetServerSideProps, NextPage } from "next";

interface ICGBPage {
	page: IPage;
}

const CGBPage: NextPage<ICGBPage> = ({ page }) => {
	return <CGB page={page} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query({ query: PageApollo.GET_CGB });

	return {
		props: {
			page: data.page,
		},
	};
};

export default CGBPage;

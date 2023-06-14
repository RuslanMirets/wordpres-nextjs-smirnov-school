import client from "@/src/apollo/client";
import { PageApollo } from "@/src/apollo/page.apollo";
import CGB from "@/src/screens/cgb/CGB";
import { PageType } from "@/src/types/page.interface";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query({
		query: PageApollo.GET_CGB,
	});

	return {
		props: {
			page: data.page,
		},
	};
};

const CGBPage = ({ page }: PageType) => {
	return <CGB page={page} />;
};

export default CGBPage;

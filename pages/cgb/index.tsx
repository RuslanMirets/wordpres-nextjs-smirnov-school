import CGB from "@/src/screens/cgb/CGB";
import { PageService } from "@/src/services/page.service";
import { IPage } from "@/src/types/page.interface";
import { GetServerSideProps, NextPage } from "next";

interface ICGBPage {
	page: IPage;
}

const CGBPage: NextPage<ICGBPage> = ({ page }) => {
	return <CGB page={page} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const page: IPage = await PageService.getBySlug();

	return {
		props: {
			page,
		},
	};
};

export default CGBPage;

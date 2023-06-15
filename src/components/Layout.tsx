import Meta from "./Meta";
import { IMeta } from "../types/meta.interface";
import Header from "./header/Header";
import { Inter, Manrope } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });
export const manrope = Manrope({ subsets: ["latin"] });

const Layout = ({
	children,
	title,
	description,
	image,
	withHeader = true,
}: PropsWithChildren<IMeta>) => {
	return (
		<>
			<Meta title={title} description={description} image={image} />
			<div className={inter.className}>
				{withHeader && <Header />}
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;

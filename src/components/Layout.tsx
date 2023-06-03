import { FC, PropsWithChildren } from "react";
import Meta from "./Meta";
import { IMeta } from "../types/meta.interface";
import Header from "./header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
	image,
}) => {
	return (
		<>
			<Meta title={title} description={description} image={image} />
			<div className={inter.className}>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;

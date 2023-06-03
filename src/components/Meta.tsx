import Head from "next/head";
import { FC } from "react";
import { IMeta } from "../types/meta.interface";

export const titleMerge = (title: string) => `${title} | Smirnov School`;

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				<meta
					itemProp="description"
					name="description"
					content={description ? description : "Описание"}
				/>
			</Head>
		</>
	);
};

export default Meta;

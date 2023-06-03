import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { IMeta } from "../types/meta.interface";

export const titleMerge = (title: string) => `${title} | Smirnov School`;

const Meta: FC<IMeta> = ({ title, description, image }) => {
	const { asPath } = useRouter();

	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={description}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="ru" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" color={currentUrl} />
						<meta property="og:image" content={image || "/favicon.svg"} />
						<meta property="og:description" content={description} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	);
};

export default Meta;

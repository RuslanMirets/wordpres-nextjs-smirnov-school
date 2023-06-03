import Link from "next/link";
import { FC } from "react";
import Container from "../container/Container";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import clsx from "clsx";

interface IMenuLinks {
	title: string;
	url: string;
}

const menuLinks: IMenuLinks[] = [
	{ title: "Главная", url: "/" },
	{ title: "Блог", url: "/blog" },
	{ title: "Основы CG", url: "/cgb" },
];

const Header: FC = () => {
	const { pathname } = useRouter();

	return (
		<header className={styles.root}>
			<Container>
				<div className={styles.container}>
					<nav>
						<ul className={styles.navList}>
							{menuLinks.map((item) => (
								<li key={item.url}>
									<Link
										className={clsx(pathname === item.url && styles.active)}
										href={item.url}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;

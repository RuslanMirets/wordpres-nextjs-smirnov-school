import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import clsx from "clsx";
import Container from "@/src/ui/container/Container";
import { signOut, useSession } from "next-auth/react";

interface IMenuLinks {
	title: string;
	url: string;
}

const menuLinks: IMenuLinks[] = [
	{ title: "Главная", url: "/" },
	{ title: "Блог", url: "/blog" },
	{ title: "Основы CG", url: "/cgb" },
	{ title: "Товары", url: "/products" },
];

const Header = () => {
	const { pathname } = useRouter();
	const { data, status } = useSession();

	return (
		<header className={styles.root}>
			<Container>
				<div className={styles.container}>
					{status !== "loading" && (
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
								{data && (
									<li>
										<Link
											className={clsx(pathname === "/profile" && styles.active)}
											href="/profile"
										>
											Профиль
										</Link>
									</li>
								)}
								{data ? (
									<li>
										<Link onClick={() => signOut()} href="#">
											Выйти
										</Link>
									</li>
								) : (
									<li>
										<Link
											className={clsx(pathname === "/login" && styles.active)}
											href="/login"
										>
											Войти
										</Link>
									</li>
								)}
							</ul>
						</nav>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;

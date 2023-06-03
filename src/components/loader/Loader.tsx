import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		router.events.on("routeChangeStart", () => {
			setLoading(true);
		});

		router.events.on("routeChangeComplete", () => {
			setLoading(false);
		});
	}, [router]);

	return <>{loading && <div className={styles.root} />}</>;
};

export default Loader;

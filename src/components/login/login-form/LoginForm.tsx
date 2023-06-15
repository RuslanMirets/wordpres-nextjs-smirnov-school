import {
	AiOutlineEye,
	AiOutlineEyeInvisible,
	AiOutlineUser,
} from "react-icons/ai";
import { BsCheck2, BsKey } from "react-icons/bs";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
	// const [passwordType, setPasswordType] = useState('')
	const [passwordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisible = () => {
		setPasswordVisible(!passwordVisible);
	};
	return (
		<form className={styles.root}>
			<div className={styles.fields}>
				<div className={styles.field}>
					<AiOutlineUser className={styles.fieldIcon} />
					<input
						className={styles.fieldInput}
						type="email"
						placeholder="Адрес электронной почты"
					/>
				</div>
				<div className={styles.field}>
					<BsKey className={styles.fieldIcon} />
					<input
						className={styles.fieldInput}
						type={passwordVisible == true ? "text" : "password"}
						placeholder="Пароль"
					/>
					<button
						className={styles.fieldEye}
						onClick={togglePasswordVisible}
						type="button"
					>
						{passwordVisible == true ? (
							<AiOutlineEyeInvisible />
						) : (
							<AiOutlineEye />
						)}
					</button>
				</div>
			</div>
			<div className={styles.remember}>
				<label className={styles.checkbox}>
					<input className={styles.checkboxInput} type="checkbox" />
					<span className={styles.checkboxStyle}>
						<BsCheck2 className={styles.checkboxCheck} />
					</span>
					<span className={styles.checkboxCaption}>Запомнить меня</span>
				</label>
				<Link className={styles.forgetLink} href="#">
					Забыли пароль?
				</Link>
			</div>
			<button className={styles.submit} type="submit">
				Войти
			</button>
		</form>
	);
};

export default LoginForm;

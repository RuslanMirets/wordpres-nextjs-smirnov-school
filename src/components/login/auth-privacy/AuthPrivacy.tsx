import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import styles from "./AuthPrivacy.module.scss";

const AuthPrivacy = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<div className={styles.root}>
				<span onClick={onOpen}>
					Оферта на оказание информационно-консультационных услуг
				</span>{" "}
				и <span>Privacy Policy</span>
			</div>
			<Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent className={styles.content}>
					<ModalHeader className={styles.title}>
						Оферта на оказание информационно-консультационных услуг
					</ModalHeader>
					<ModalBody>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
						<div className={styles.info}>
							<h2>1. Общие положения</h2>
							<p>
								1.1. Настоящий публичный договор (далее – Оферта) представляет
								собой официальное предложение Индивидуального предпринимателя
								Смирновой Светланы Лазаревны ОГРНИП № 316774600185951 от
								04.04.2016г. (далее — Исполнитель), и содержит все существенные
								условия по оказанию информационно-консультационных услуг.
							</p>
							<p>
								1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
								Российской Федерации (далее – ГК РФ) данный документ является
								публичной офертой и, в случае принятия изложенных ниже условий и
								оплаты услуг Исполнителя, лицо, совершившее акцепт этой Оферты,
								становится Заказчиком в соответствии с пунктом 3 статьи 438 ГК
								РФ, акцепт Оферты равносилен заключению договора на условиях,
								изложенных в Оферте.
							</p>
							<p>
								1.3. Осуществляя оплату услуг, Заказчик гарантирует, что уже
								ознакомлен и принимает все условия Оферты, в том виде, в каком
								они изложены в тексте настоящей Оферты, а также в Приложении №1
								к настоящей Оферте (Пользовательское соглашение) и ознакомлен со
								стоимостью Услуги, указанной на Сайте Исполнителя
								https://smirnov.school
							</p>
						</div>
					</ModalBody>
					<ModalCloseButton />
				</ModalContent>
			</Modal>
		</>
	);
};

export default AuthPrivacy;

import Container from "@/src/ui/container/Container";
import Layout from "../Layout";
import Heading from "@/src/ui/heading/Heading";
import LoginForm from "../auth-forms/LoginForm";

const Login = () => {
	return (
		<Layout title="Логин">
			<Container>
				<Heading center>Авторизация</Heading>
				<LoginForm />
			</Container>
		</Layout>
	);
};

export default Login;

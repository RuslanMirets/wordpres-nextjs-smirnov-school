import Layout from "@/src/components/Layout";
import Container from "@/src/ui/container/Container";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Heading from "@/src/ui/heading/Heading";
import Image from "next/image";
import { IUser } from "@/src/types/user.interface";

const ProfilePage = ({ user }: IUser) => {
	return (
		<Layout title="Профиль">
			<Container>
				<Heading>Профиль</Heading>
				<h2>
					{user.firstName} {user.lastName}
				</h2>
				<div>{user.roles.nodes[0].name}</div>
				<Image
					src={user.avatar.url}
					width={100}
					height={100}
					alt={user.firstName}
				/>
			</Container>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getServerSession(context.req, context.res, authOptions);

	// if (!session) {
	// 	return {
	// 		redirect: {
	// 			destination: "/login",
	// 			permanent: false,
	// 		},
	// 	};
	// }

	return {
		props: {
			user: session?.user,
		},
	};
};

export default ProfilePage;

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import client from "@/src/apollo/client";
import { UserApollo } from "@/src/apollo/user.apollo";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "email", type: "email" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password)
					throw new Error("Invalid credentials");

				const { data } = await client.mutate({
					mutation: UserApollo.LOGIN_USER,
					variables: {
						username: credentials?.email,
						password: credentials?.password,
					},
				});

				if (data) return data.login.user;
				else return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
	session: { strategy: "jwt" },
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

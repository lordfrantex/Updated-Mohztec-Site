import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '../../../../../prisma/connect'
import { PrismaAdapter } from '@auth/prisma-adapter'
import bycrpt from 'bcrypt';
import { NextResponse } from 'next/server';

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            profile(profile) {
                let role;
                if (
                    profile.email === "lordfranktex@gmail.com" ||
                    profile.email === "mosesokocha@gmail.com"
                ) {
                    role = "admin";
                } else {
                    role = "user";
                }
                const user = {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: role,
                };

                async function updateDB() {
                    // Update the user's role in the database
                    const update = await prisma.user.update({
                        where: {
                            email: user.email
                        },
                        data: { role: user.role },
                    });

                }
                updateDB()

                return user;
            },


        }),


        CredentialsProvider({
            name: "credentials",
            credentials: {
                // username: { label: "name", type: "text", placeholder: "Input Your Username" },
                username: { label: "email", type: "email", placeholder: "Input Your email" },
                password: { label: "Password", type: "password", placeholder: "Input Your Password" }
            },


            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    throw new Error('Input correct username and password');
                    return null
                }

                // check to see if user exist
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user) {
                    throw new Error('User Not Found');
                    return null

                };


                // check to see if password match
                const passwordMatch = await bycrpt.compare(credentials.password, user.hashedPassword)
                if (!passwordMatch) {
                    throw new Error('Password does not match');
                    return null
                };

                // return user if password match, assign role based on email
                let role
                if (user.email === "lordfranktex@gmail.com" || user.email === "mosesokocha@gmail.com") {
                    role = "admin"
                } else {
                    role = "user"
                };


                // Update the user's role in the database
                await prisma.user.update({
                    where: {
                        email: credentials.email
                    },
                    data: { role },
                });

                return {
                    ...user, role
                }

            }


        })


    ],

    callbacks: {
        jwt({ token, user }) {
            return { ...token, ...user }
        },
        session({ session, token }) {
            session.user.role = token.role
            return session
        }

    },

    session: {
        strategy: "jwt",
        maxAge: 3 * 24 * 60 * 60,
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }
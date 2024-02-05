import bycrpt from "bcrypt"
import prisma from "../../../../prisma/connect"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const body = await req.json();
    const { email, name, password } = body;

    if (!name || !email || !password) {
        return NextResponse.json({ message: "Missing Name,Email or Password." }, { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (exist) {
        return NextResponse.json({ message: "User already exist." }, { status: 400 })

    }
    const hashedPassword = await bycrpt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json({ user, message: "You have successfully registered." }, { status: 200 })

}
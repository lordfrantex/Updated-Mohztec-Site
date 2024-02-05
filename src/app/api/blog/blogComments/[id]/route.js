import { NextResponse } from "next/server"
import prisma from "../../../../../../prisma/connect";


// create one comment provided that the user exist.
export const POST = async (req, { params }) => {
    try {

        const body = await req.json()

        // Check if user exist
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        });


        // If there's no user, return a message: "user does not exit"
        if (!user) {
            return NextResponse.json({ message: "User does not exist!!!" }, { status: 500 })
        }

        // If user exist, create a blog comment for the user.
        const createBlogComment = await prisma.blogComments.create({
            data: {
                text: body.comment,
                blogId: params.id,
                userId: body.email,
            },
            include: {
                user: true
            }
        });
        const returnBlogComments = await prisma.blogComments.findMany({
            where: {
                blogId: params.id
            },
            include: {
                user: true
            }
        });
        return NextResponse.json(returnBlogComments, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}


// Get all blog comment from a particular blog post
export const GET = async (req, { params }) => {
    try {
        const blogComment = await prisma.blogComments.findMany({
            where: {
                blogId: params.id
            },
            include: {
                user: true
            }
        });
        return NextResponse.json(blogComment, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }

}


// Delete a user's comment
export const DELETE = async (req, { params }) => {

    try {
        const body = await req.json()

        const validateUser = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (!validateUser) {
            return NextResponse.json({ message: "You are not authorized to delete this comment" }, { status: 400 })

        }
        const deleteComment = await prisma.blogComments.delete({
            where: {
                id: body.commentId

            },
        })
        const returnBlogComments = await prisma.blogComments.findMany({
            where: {
                blogId: body.slug
            },
            include: {
                user: true
            }
        });
        return NextResponse.json(returnBlogComments, { message: "Your comment has been successufully deleted" }, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }

}


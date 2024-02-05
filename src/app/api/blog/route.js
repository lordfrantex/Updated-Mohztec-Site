
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/connect";
import cloudinary from "../../../../cloudinary/cloudinary";


// FETCH ALL BLOGS
export const GET = async (req, res) => {

    try {
        const url = new URL(req.nextUrl).searchParams
        const category = await url.get("category")
        const related = await url.get("related")
        const blogId = await url.get("blogId")

        if (!category) {
            const blogs = await prisma.blog.findMany()
            return NextResponse.json(blogs, { status: 200 })

        }
        if (related || blogId) {
            const blogs = await prisma.blog.findMany({
                where: {
                    id: { not: blogId },
                    category
                },
            })
            return NextResponse.json(blogs, { status: 200 })

        }


        const blogs = await prisma.blog.findMany({
            where: {
                category
            },
            include: {
                blogComment: true
            }
        });
        return NextResponse.json(blogs, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!" }, { status: 200 })

    }
}

// POST SINGLE BLOG
export const POST = async (req) => {
    try {
        const body = await req.json();
        const uploadedImage = await cloudinary.uploader.upload(body.img,
            {
                upload_preset: 'mohztec-technologies',
                folder: 'blog',
                allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
            });



        const createBlog = await prisma.blog.create({
            data: {
                category: body.category,
                img: uploadedImage.public_id,
                imgURL: uploadedImage.url,
                title: body.title,
                author: body.author,
                description: body.description,

            },
            include: {
                blogComment: true, // Include the user in the response
            },


        })



        return NextResponse.json(createBlog, { status: 200 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ Error: err })

    }

}


// DELETE ALL BLOGS
export const DELETE = async (req) => {
    try {
        const deleteAllBlogs = await prisma.blog.deleteMany()
        return NextResponse.json({ message: 'All blogs deleted successfully' }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ Error: error }, { status: 500 })

    }
}
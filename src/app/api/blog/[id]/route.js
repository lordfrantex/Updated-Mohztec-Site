import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../../../cloudinary/cloudinary";
import prisma from "../../../../../prisma/connect";

// GET SINGLE BLOG POST
export const GET = async (req, { params }) => {

    try {
        const item = await prisma.blog.findUnique({
            where: {
                id: params.id,
            },
        });
        return NextResponse.json({ item, status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!", status: 500 });

    }

}


// DELETE SINGLE BLOG POST
export const DELETE = async (req, { params }) => {
    try {
        const deletedPost = await prisma.blog.delete({
            where: {
                id: params.id,
            },
        });
        return NextResponse.json({ message: 'Blog deleted sucessfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!", status: 500 });

    }

}

// UPDATE SINGLE BLOG POST

export const PATCH = async (req, { params }) => {
    const body = await req.json();
    const { category, title, description, author, editImg, publicId } = body

    try {
        let editedPosts

        if (!editImg || !publicId) {
            editedPosts = { category, title, description, author }

        } else {

            const { url, public_id } = await cloudinary.uploader.upload(editImg,
                {
                    public_id: publicId,
                    upload_preset: 'mohztec-technologies',
                    folder: 'blog',
                    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
                });
            editedPosts = { category, title, description, author, img: publicId, imgURL: url }
        }
        const editPost = await prisma.blog.update({
            where: {
                id: params.id,
            },
            data: editedPosts,
        });
        return NextResponse.json({ message: 'Blog edited sucessfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!", status: 500 });

    }

}

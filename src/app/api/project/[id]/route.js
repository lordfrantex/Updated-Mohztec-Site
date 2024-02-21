import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../../../cloudinary/cloudinary";
import prisma from "../../../../../prisma/connect";
export const GET = async (req, { params }) => {

    try {
        const item = await prisma.project.findUnique({
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
export const DELETE = async (req, { params }) => {
    try {
        const deletedPost = await prisma.project.delete({
            where: {
                id: params.id,
            },
        });
        return NextResponse.json({ message: 'Project deleted sucessfully' }, { status: 200 });
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
            editedPosts = { category, title, description }

        } else {

            const { url, public_id } = await cloudinary.uploader.upload(editImg,
                {
                    public_id: publicId,
                    upload_preset: 'mohztec-technologies',
                    folder: 'project',
                    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
                });
            editedPosts = { category, title, description, img: publicId, imgURL: url }
        }
        const editPost = await prisma.project.update({
            where: {
                id: params.id,
            },
            data: editedPosts,
        });
        return NextResponse.json({ message: 'Project edited sucessfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!", status: 500 });

    }

}


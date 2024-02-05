
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/connect";
import cloudinary from "../../../../cloudinary/cloudinary";


// FETCH ALL PROJECTS
export const GET = async (req, { params }) => {
    try {
        const url = new URL(req.nextUrl).searchParams
        const category = await url.get("category")?.toLocaleLowerCase()
        // const categoryLower = category

        const project = await prisma.project.findMany();

        if (!category) {
            return NextResponse.json(project, { status: 200 })
        }

        if (category.length > 0) {

            const findProjectByCategory = await prisma.project.findMany({
                where: {
                    category
                }
            });

            if (findProjectByCategory.length < 1) {
                return NextResponse.json({ message: "Category does not exist!!!" }, { status: 500 })
            }

            return NextResponse.json(findProjectByCategory, { status: 200 })

        }


    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })

    }
}



// POST SINGLE PROJECT
export const POST = async (req) => {
    try {

        const body = await req.json();

        const uploadedImage = await cloudinary.uploader.upload(body.img,
            {
                upload_preset: 'mohztec-technologies',
                folder: 'mohztec-projects/project',

                allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
            },
        );


        const category = body.category.toLocaleLowerCase()
        const createProject = await prisma.project.create({
            data: {
                category,
                img: uploadedImage.public_id,
                imgURL: uploadedImage.url,
                title: body.title,
                description: body.description,
            },

        })

        return NextResponse.json(createProject, { status: 200 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ Error: err }, { status: 400 })

    }

}


// DELETE ALL POSTS
export const DELETE = async (req) => {
    try {
        const deleteAllProjects = await prisma.project.deleteMany()
        return NextResponse.json({ message: 'All projects deleted successfully' }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ Error: error }, { status: 500 })

    }
}
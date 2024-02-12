// import BootstrapClient from '@/components/bootstrapClient/BootstrapClient'
import './project.scss'
import Image from 'next/image'
// import BootstrapClient from '../../components/bootstrapClient/BootstrapClient'
import Link from 'next/link'
import ProjectOptions from './ProjectOptions'

// console.log("THis is the process", process.env.NEXTAUTH_URL)

export const getProjects = async (category) => {
    const url = `${process.env.BASE_URL}/api/project?category=${category || ""}`

    try {
        const res = await fetch(url, { cache: "no-cache" });

        // const res = await fetch(`${url}/api/project?category=${category || ""}`, { cache: 'no-store' })
        return res.json()
    } catch (error) {
        console.log(error);
    }
}

// METADATA FOR SEO
// export async function generateMetadata({ searchParams }) {
//     const res = await fetch(`http://localhost:3000/api/project/${params.name}`, { cache: "no-store" });
//     const { item } = await res.json()
//     console.log(item);
//     if (!item) return {
//         title: "Not Found",
//         description: "The Page is not found"
//     }
//     return {

//         title: item.title,
//         description: item.description,

//     }
// }


const Projects = async ({ searchParams }) => {
    const { category } = searchParams
    const project = await getProjects(category)
    const mapProjects = project?.length > 0 && project.map((project, index) => {
        return (
            // <Link href={`/project/${project.id}`} className='container' key={project.id}>
            <Link href={`#`} className='container ' key={project.id}>

                <div className="project-card container  row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="">
                            <p className='title display-5'> Title:{project.title} </p>
                            <p className='category'> Category: {project.category} </p>
                            <p>{project.description}</p>
                            <button className='btn mb-3 btn-secondary'>Learn more</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className=" project-image">
                            <Image src={project.imgURL} fill alt={project.title} />
                        </div>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div className=' project-container container-xxl'>
            <h1 className='text-center display-3 '>View {category ? category : "All"} Projects</h1>
            <ProjectOptions />
            {mapProjects}
        </div>
    )
}

export default Projects



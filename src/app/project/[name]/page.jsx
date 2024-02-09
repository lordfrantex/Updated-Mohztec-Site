import Image from "next/image";

// METADATA FOR SEO
export async function generateMetadata({ params }) {
    const res = await fetch(`${process.env.https://mohztec-technologies.onrender.com}/api/project/${params.name}`, { cache: "no-store" });
    const { item } = await res.json()
    if (!item) return {
        title: "Not Found",
        description: "The Page is not found"
    }
    return {

        title: item.title,
        description: item.description,

    }
}

const fetchSpecificProject = async (name) => {
    try {
        const res = await fetch(`${process.env.https://mohztec-technologies.onrender.com}/api/project/${name}`, { cache: "no-cache" });
        return res.json()
    } catch (error) {
        console.log(error);
    }

}

const page = async ({ params }) => {
    const { name } = params
    const { item } = await fetchSpecificProject(name)

    return (
        <div className="container">
            <div className="card parent">
                Title:{item.title}
                Category:{item.category}
                <Image src={item.imgURL} height={300} width={300} alt={item.title} />
            </div>
        </div>
    )
}

export default page
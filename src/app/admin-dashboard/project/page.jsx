import Image from "next/image";
// import './admin-project.scss'
import Link from "next/link";
import toast from "react-hot-toast";
// import DeleteProjectComponent from "./DeleteProjectComponent";
const fetchProject = async () => {
  try {
    // const res = await fetch(`http://localhost:3000/api/project`, { cache: "no-cache" });
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/project`, { cache: "no-cache" });
    return res.json()
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {

  const project = await fetchProject()

  const mapProjects = project && project?.map((project) => {



    return (
      <div key={project.id} className=" col-12 col-md-4">
        <div >
          <div class="card">
            <Image className="card-img-top" src={project.imgURL} alt={project.category} height={200} width={200} />
            <div class="card-body">
              <p>Title: {project.title}</p>
              <p>Category: {project.category}</p>
              <button className="btn  btn-primary btn-sm me-2"><Link href={`/admin-dashboard/project/${project.id}`}>Edit</Link></button>
              {/* <DeleteprojectComponent id={project.id} /> */}

            </div>
          </div>
        </div>

      </div>
    )
  })
  return (
    <div className="admin-project-container container ">
      <div className="row g-3 ">
        <div className="text-center">
          <p className="display-5">You are viewing this as an admin!!!</p>
          <p className="fs-3">This Are Our project Posts</p>
          <Link href="/admin-dashboard/project/create-project" className="btn text-right ms-auto  btn-primary">Create project</Link>
        </div>
        {mapProjects}
      </div>
    </div>
  )
}
export default page



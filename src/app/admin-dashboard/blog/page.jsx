import Image from "next/image";
import './admin-blog.scss'
import Link from "next/link";
import toast from "react-hot-toast";
import DeleteBlogComponent from "./DeleteBlogComponent";
const fetchBlog = async () => {
    try {
        // const res = await fetch(`http://localhost:3000/api/blog`, { cache: "no-cache" });
        const res = await fetch(`${process.env.https://mohztec-technologies.onrender.com}/api/blog`, { cache: "no-cache" });
        return res.json()
    } catch (error) {
        console.log(error);
    }
}
const page = async () => {

    const blog = await fetchBlog()

    const mapBlogs = blog && blog?.map((blog) => {



        return (
            <div key={blog.id} className="col-12 col-md-4">
                <div >
                    <div class="card">
                        <Image className="card-img-top" src={blog.imgURL} alt={blog.category} height={200} width={200} />
                        <div class="card-body">
                            <p>Title: {blog.title}</p>
                            <p>Category: {blog.category}</p>
                            <button className="btn  btn-primary btn-sm me-2"><Link href={`/admin-dashboard/blog/${blog.id}`}>Edit</Link></button>
                            <DeleteBlogComponent id={blog.id} />

                        </div>
                    </div>
                </div>

            </div>
        )
    })
    return (
        <div className="admin-blog-container container ">
            <div className="row g-3 ">
                <div className="text-center">
                    <p className="display-5">You are viewing this as an admin!!!</p>
                    <p className="fs-3">This Are Our Blog Posts</p>
                    <Link href="/admin-dashboard/blog/create-blog" className="btn text-right ms-auto  btn-primary">Create Blog</Link>
                </div>
                {mapBlogs}
            </div>
        </div>
    )
}
export default page



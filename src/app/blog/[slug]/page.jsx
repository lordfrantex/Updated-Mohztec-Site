import { faFacebook, faLinkedinIn, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft, faThumbsDown, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import PostComment, { DeleteComment } from "./PostComment"
import '../blog.scss'
import MapComment from "./MapComment"
import { Yeseva_One } from "next/font/google"
import parse from 'html-react-parser';




// METADATA FOR SEO
export async function generateMetadata({ params }) {
    // const res = await fetch(`http://localhost:3000/api/blog/${params.slug}`, { cache: "no-store" });
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${params.slug}`, { cache: "no-store" });
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

const fetchBlog = async (blogSlug) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${blogSlug}`, { cache: "no-store" });
        return res.json()
    } catch (error) {
        console.log(error);
    }
}


const fetchArrayData = async (category, blogSlug) => {
    const fetchArray = [
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/blogComments/${blogSlug}`, { cache: "no-cache" }),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?category=${category}&related=true&blogId=${blogSlug}`, { cache: "no-cache" }),
    ]

    try {
        const res = await Promise.allSettled(fetchArray)
        const successArray = []
        res.map(obj => {
            if (obj.status === "fulfilled") {
                successArray.push(obj.value)
            }
        })
        const data = await Promise.all(successArray.map(item => item.json()))

        return data
    } catch (error) {
        console.log(error);
    }
}

const SingleBlog = async ({ params }) => {
    const { slug } = params
    const { item } = await fetchBlog(slug)
    const [comments, related] = await fetchArrayData(item?.category, slug)

    const mapRelatedBlogs = related?.map((blog, index) => {
        return (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="d-flex gap-3 my-3 p-3 related-blog">
                <div className="related-blog-image">
                    <Image width={300} height={100} src={blog.imgURL} alt="mohztec-technologies" />
                </div>
                <div className="related-blog-title">
                    <p>{blog.title}</p>
                    <span>Category: {blog.category}</span>
                </div>
            </Link>
        )
    })

    let getComment
    return (
        <div className="container">

            {/* <div className='blog-back'>
                <Link href='/blog' ><FontAwesomeIcon size="sm" icon={faArrowLeft} /></Link>
            </div> */}

            <div className="single-blog">
                <div className="single-blog-right">
                    <div className="single-blog-main-image">
                        <Image src={item.imgURL} fill alt={item.title} priority={true} />
                    </div>
                    <h1 className="fw-bold my-3">Title: {item.title}</h1>
                    <p className="mb-3 fw-bold">Author: {item.author}</p>
                    <hr />
                    <div> {parse(item.description)} </div>
                    <div className="comment">
                        <div className="comment-box">
                            <PostComment slug={slug} />
                        </div>
                    </div>

                </div>
                <div className="single-blog-left">
                    <h3 className="fw-bold">Related Blogs</h3>
                    {mapRelatedBlogs}
                    <div className="email-update mt-5">
                        <h3 className="fw-bold font-sm">Subscribe for more updates</h3>
                        <div className="d-flex gap-2">
                            <input type="text" className="rounded-2" placeholder="Enter your email" />
                            <button className="btn btn-md text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
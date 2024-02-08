import Image from "next/image";
import { DeleteComment } from "./PostComment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const fetchComment = async (blogSlug) => {
    // const res = await fetch(`http://localhost:3000/api/blog/blogComments/${blogSlug}`, { cache: "no-cache" })
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog/blogComments/${blogSlug}`, { cache: "no-cache" })
    const data = await res.json()
    return data
}



const MapComment = async ({ blogSlug }) => {
    const blogComments = await fetchComment(blogSlug)

    const mapBlogComments = blogComments && blogComments?.map(comment => {
        return (
            <div className="blog-review-card" key={comment.id}>
                {
                    comment?.user?.image ?
                        <Image height={30} width={30} className="rounded-circle" src={comment?.user?.image} alt="" />
                        : <Image height={30} width={30} className="rounded-circle" src="/mohztec-images/profile.jpg" />
                }
                <h5>{comment.user.name} <span><FontAwesomeIcon icon={faThumbsUp} height="20px" width="20px" /></span></h5>
                <p>{comment.text}</p>
                <DeleteComment userEmail={comment?.user?.email} commentId={comment.id} />
            </div>
        )
    })
    return (
        <div>{mapBlogComments}</div>
    )
}

export default MapComment
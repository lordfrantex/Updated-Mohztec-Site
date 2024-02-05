"use client"

import { text } from "@fortawesome/fontawesome-svg-core"
import { faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const PostComment = ({ slug }) => {
    const { data, status } = useSession({
        // required: true,
        onUnauthenticated() {
            redirect(`/api/auth/signin?callbackUrl=/blog/${slug}`)
        }
    })
    // const { data, status } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect(`/api/auth/signin?callbackUrl=/blog/${slug}`)
    //     }
    // })
    const email = data?.user?.email
    const router = useRouter()
    const [comment, setComment] = useState("")
    const [loading, setLoading] = useState(false)
    const [blogComment, setBlogComment] = useState([])


    useEffect(() => {


        const fetchBlog = async (slug) => {
            try {

                const res = await fetch(`http://localhost:3000/api/blog/blogComments/${slug}`, { cache: "no-cache" })
                const data = await res.json()
                setBlogComment(data)
                return data
            } catch (error) {
                console.log(error);
            }
        }
        fetchBlog(slug)
    }, [])

    const postBlogComment = async (slug, email, comment) => {
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:3000/api/blog/blogComments/${slug}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ comment, email, slug })
            })
            const data = await res.json()
            setBlogComment(data)
            setComment("")

            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)

        }
    }



    return (
        <>

            <textarea name="" onChange={(e) => setComment(e.target.value)} value={comment} placeholder="Add a comment"></textarea>
            <button className="post-button" disabled={loading} onClick={() => email ? postBlogComment(slug, email, comment) : router.push("/login")}>Post</button >

            {/* <small onClick={() => redirect("/login?callbackUrl=/blog")}>Redirect</small>s */}
            {
                blogComment.map(comment => {
                    return (
                        <div className="blog-review-card" key={comment.id} >
                            {
                                comment?.user?.image ?
                                    <Image height={30} width={30} className="rounded-circle" src={comment?.user?.image} alt="" />
                                    : <Image height={30} width={30} className="rounded-circle" src="/mohztec-images/profile.jpg" />
                            }
                            < h5 > {comment.user.name}</h5 >
                            <p>{comment.text}</p>
                            <DeleteComment slug={slug} userEmail={comment?.user?.email} commentId={comment.id} setBlogComment={setBlogComment} />

                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}




export const DeleteComment = ({ userEmail, slug, commentId, setBlogComment }) => {
    const { data, status } = useSession()
    const [commentLoading, setCommentLoading] = useState(false)

    const email = data?.user?.email


    const handleDelete = async (email, commentId, slug) => {
        try {

            setCommentLoading(true)
            const res = await fetch(`http://localhost:3000/api/blog/blogComments/${slug}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ commentId, email, slug })
            })
            const data = await res.json()
            setBlogComment(data)
            setCommentLoading(false)

        } catch (error) {
            console.log(error);
            setCommentLoading(false)

        }
    }
    return (
        <div>
            {
                userEmail === email &&
                <button className="p-1 rounded-2 border btn" onClick={() => handleDelete(email, commentId, slug)} disabled={commentLoading}> <FontAwesomeIcon icon={faTrash} /></button>
            }

        </div>
    )
}



export default PostComment

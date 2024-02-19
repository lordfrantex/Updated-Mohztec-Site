'use client'
import Image from 'next/image'
import '../admin-blog.scss'

import { useEffect, useRef, useState } from "react"
import toast from 'react-hot-toast'

const Page = ({ params }) => {
    const { slug } = params
    const fetchBlog = async (slug) => {
        try {
            // const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: "no-cache" });
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`, { cache: "no-cache" });
            const { item: data } = await res.json()
            setBlog(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlog(slug)
    }, [])


    const [isLoading, setLoading] = useState(false)
    const [editImg, setEditImg] = useState("")
    const imgRef = useRef()

    const [blog, setBlog] = useState({})


    const handleChange = e => {

        const { name, value, type } = e.target

        const previewFile = (file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onloadend = () => setEditImg(reader.result)
        }

        if (type === 'text' || type === 'textarea') {

            setBlog(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
        if (type === "select-one") {
            setBlog(prev => {
                return {
                    ...prev,
                    category: value
                }
            })
        }

        if (type === 'file') {
            const file = e.target.files[0]
            previewFile(file)

        }


    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { category, title, author, description, img } = blog
        if (!category || !title || !author || !description || !img) {
            toast.error("All fields are required!!!")
            return null
        }

        // setBlog({
        //     category: '',
        //     title: '',
        //     img: '',
        //     description: '',
        //     author: ''
        // })
        // imgRef.current.value = ""



        setLoading(true)
        try {
            let sendBlog
            if (!editImg) {
                sendBlog = { category, title, description, author }
            } else {
                sendBlog = { category, title, description, author, editImg, publicId: img }

            }

            // const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendBlog)
            })
            if (res.ok) {
                toast.success("Blog has been Updated successfully.")

            }

            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)

        }


    }

    return (
        <div className="blog-form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={blog.title} name="title" onChange={handleChange} placeholder="Enter Blog's Title" />
                <input type="file" ref={imgRef} onChange={handleChange} accept='image/*' />
                <Image src={editImg ? editImg : blog.imgURL} width={100} height={100} alt="" />

                <div className='my-3'>
                    <label>
                        <select value={blog.category} onChange={handleChange}>
                            <option value={""}>Select Blog&apos;s Category</option>
                            <option>Solar Installation</option>
                            <option>CCTV Installation</option>
                            <option>IoT Installation</option>
                            <option>Interior Lightening</option>
                            <option>Electrical Wiring</option>
                        </select>
                    </label>
                </div>
                <input type="text" value={blog.author} name="author" onChange={handleChange} placeholder="Enter Author's name... " />
                <textarea name="description" value={blog.description} onChange={handleChange} placeholder='Enter Description Post...' />
                <button type="submit" disabled={isLoading} >Submit</button>
            </form >
        </div >
    )
}

export default Page
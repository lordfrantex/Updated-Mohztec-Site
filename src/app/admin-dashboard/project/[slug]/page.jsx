"use client"
import Image from 'next/image'
import '../admin-project.scss'
import { useEffect, useRef, useState } from "react"
import toast from 'react-hot-toast'

const Page = ({ params }) => {

    const [isLoading, setLoading] = useState(false)
    const [editImg, setEditImg] = useState("")
    const imgRef = useRef()
    const [project, setProject] = useState({})

    const { slug } = params
    const fetchProject = async (slug) => {
        try {
            // const res = await fetch(`http://localhost:3000/api/project/${slug}`, { cache: "no-cache" });
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project/${slug}`, { cache: "no-cache" });
            const { item: data } = await res.json()
            setProject(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProject(slug)
    }, [])

    const handleChange = e => {

        const { name, value, type } = e.target

        const previewFile = (file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onloadend = () => setEditImg(reader.result)
        }

        if (type === 'text' || type === 'textarea') {

            setProject(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
        if (type === "select-one") {
            setProject(prev => {
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
        const { category, title, description, img } = project

        setLoading(true)
        try {
            let sendProject
            if (!editImg) {
                sendProject = { category, title, description }
            } else {
                sendProject = { category, title, description, editImg, publicId: img }

            }
            // const res = await fetch(`http://localhost:3000/api/project/${slug}`, {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project/${slug}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendProject)
            })
            const { message } = await res.json()
            if (res.ok) {
                toast.success(message)

            }

            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)

        }

    }

    return (
        <div className="project-form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={project.title} name="title" onChange={handleChange} placeholder="Enter project's Title" />
                <input type="file" ref={imgRef} onChange={handleChange} accept='image/*' />
                <Image src={editImg ? editImg : project.imgURL} width={100} height={100} alt="" />

                <div className='my-3'>
                    <label>
                        <select value={project.category} onChange={handleChange}>
                            <option value={""}>Select project&apos;s Category</option>
                            <option>Solar Installation</option>
                            <option>CCTV Installation</option>
                            <option>IoT Installation</option>
                            <option>Interior Lightening</option>
                            <option>Electrical Wiring</option>
                        </select>
                    </label>
                </div>
                <textarea name="description" value={project.description} onChange={handleChange} placeholder='Enter Description Post...' />
                <button type="submit" disabled={isLoading} >Submit</button>
            </form >
        </div >
    )
}

export default Page



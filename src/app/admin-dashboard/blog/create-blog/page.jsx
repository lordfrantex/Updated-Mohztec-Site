'use client'
import './create-blog.scss'

import { useRef, useState } from "react"
import toast from 'react-hot-toast'

const CreateBlog = () => {


    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const imgRef = useRef()

    const [blog, setBlog] = useState({
        category: '',
        title: '',
        img: '',
        description: '',
        author: ''
    })




    const handleChange = e => {

        const { name, value, type } = e.target

        const previewFile = (file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => setBlog(prev => {
                return {
                    ...prev,
                    img: reader.result
                }
            })
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

        setBlog({
            category: '',
            title: '',
            img: '',
            description: '',
            author: ''
        })
        imgRef.current.value = ""



        setLoading(true)
        try {

            const res = await fetch('http://localhost:3000/api/blog', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(blog)
            })
            if (res.ok) {
                toast.success("Blog has been created successfully.")

            }

            const data = await res.json()
            setData(data);

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
                {/* <img src={data.imgURL} width='100px' height='100px' alt="" /> */}
                <img src={blog.img} width='100px' height='100px' alt="" />

                <div className='my-3'>
                    <label>
                        <select value={blog.category} onChange={handleChange}>
                            <option value={""}>Select Blog's Category</option>
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

export default CreateBlog
'use client'

import Image from 'next/image';
import '../admin-project.scss';

import { useState, useEffect } from "react"
import toast from 'react-hot-toast'

const CreateProject = () => {

    const [data, setData] = useState([])
    const fetchProject = async () => {
        // const res = await fetch("http://localhost:3000/api/project")
        const res = await fetch(`${process.env.https://mohztec-technologies.onrender.com}/api/project`)
        const project = await res.json()
        setData(project)
    }

    useEffect(() => {
        fetchProject()
    }, [])

    const [isLoading, setLoading] = useState(false)
    const [project, setProject] = useState({
        category: '',
        title: '',
        img: '',
        description: '',
    })


    const handleChange = e => {
        const { name, value, type } = e.target

        const previewFile = (file, name) => {

            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => setProject(prev => {
                return {
                    ...prev,
                    img: reader.result
                }
            })

        }

        if (type === 'text' || type === 'textarea') {
            setProject(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }

        if (type === 'file') {
            const file = e.target.files[0]
            previewFile(file, file.name)
        }
        if (type === "select-one") {
            setProject(prev => {
                return {
                    ...prev,
                    category: value
                }
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {

            // const res = await fetch('http://localhost:3000/api/project', {
            const res = await fetch(`${process.env.https://mohztec-technologies.onrender.com}/api/project`, {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
            },
                body: JSON.stringify(project)
            })



        if (res.ok) {
            toast.success("Project created successfully")
            fetchProject()

        }
        const data = await res.json()
        setData(data);

        setProject({
            category: '',
            title: '',
            img: '',
            description: '',
        })
        setLoading(false)
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
        setLoading(false)

    }


}
return (
    <div className="project-form ">
        <form onSubmit={handleSubmit} className="">
            <input type="text" value={project.title} name="title" onChange={handleChange} placeholder='Enter Title' />
            <input type="file" multiple name="img" onChange={handleChange} accept='image/*' />
            <Image src={project.img} width={100} height={100} alt="" />

            <div className='my-3'>
                <label>
                    <select value={project.category} onChange={handleChange}>
                        <option value={""}>Select Project&apos;s Category</option>
                        <option>Solar </option>
                        <option>CCTV </option>
                        <option>IoT </option>
                        <option>Interior Lightening</option>
                        <option>Electrical Wiring</option>
                    </select>
                </label>
            </div>

            <textarea name="description" value={project.description} onChange={handleChange} placeholder='Enter Description...' />
            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
    </div>
)
}

export default CreateProject
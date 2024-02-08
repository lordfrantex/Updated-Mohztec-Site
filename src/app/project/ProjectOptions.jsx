"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const ProjectOptions = () => {
    const [option, setOption] = useState("")

    const router = useRouter()

    const handleChange = (e) => {
        setOption(e.target.value)
        router.push(`http://localhost:3000/project?category=${e.target.value}`)
    }
    return (
        <div className="text-center">
            <label>
                <select className="p-2 rounded-2" value={option} onChange={handleChange}>
                    <option value={""}>Select Blogs Category</option>
                    <option value={""}>View all</option>
                    <option>Solar</option>
                    <option>CCTV</option>
                    <option>IoT</option>
                    <option>Interior Lightening</option>
                    <option>Electrical Wiring</option>
                </select>
            </label>
        </div>
    )
}

export default ProjectOptions
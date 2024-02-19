'use client'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './register.scss'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
const Page = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const [details, setDetails] = useState({
        name: '',
        password: '',
        email: '',
        number: '',
    })
    const handleDetails = (e) => {
        const { value, name } = e.target;
        e.preventDefault()

        setDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        try {

            setLoading(true)
            e.preventDefault();
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    'Content-type': "application/json"
                }
            });
            const data = await res.json()
            router.push("/login")

            setDetails({
                name: '',
                password: '',
                email: '',
            })
            setLoading(false)

            toast.success(data.message)


        } catch (error) {
            setLoading(false)
            toast.success("Something went wrong")
        }
    }
    return (
        <section className='register-background'>
            <div className="container">
                <div className="row m-1 m-md-0">
                    <div className="col-12 col-md-8 pt-3 col-lg-5 m-auto rounded-3 border login-container">
                        <form className="">
                            <h1 className='text-white fw-bold'>Register Form</h1>
                            <div className="credentials">
                                <div className="username">
                                    <span className='text-white'>Username: </span><br />
                                    <input type="text" value={details.name} name='name' onChange={handleDetails} placeholder='Input Username Here.' />
                                </div>
                                <div className="password">
                                    <span className='text-white'>Password: </span><br />
                                    <input type="password" value={details.password} name='password' onChange={handleDetails} placeholder='Input Password Here.' />
                                </div>
                                {/* <div className="number">
                                    <span className='text-white'>Phone Number: </span><br />
                                    <input type="text" value={details.number} name='number' onChange={handleDetails} placeholder='Input Number Here.' />
                                </div> */}
                                <div className="email">
                                    <span className='text-white'>Email: </span><br />
                                    <input type="email" value={details.email} name='email' onChange={handleDetails} placeholder='Input Email Here.' />
                                </div>
                            </div>

                            <div className="submit mt-4">
                                <button disabled={loading} onClick={handleSubmit}>REGISTER</button>
                            </div>
                            <div className="">
                                <p className='text-center mt-3 text-white'>---Or Register With---</p>
                                <p className='icon text-center'>
                                    <span className='me-3'>
                                        <FontAwesomeIcon icon={faFacebook} width='30px' />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faGoogle} width='30px' />
                                    </span>
                                </p>
                                <Link href='/login'> <p className='text-center text-white'>Already have an account? <span className='text-decoration-underline'> Login Here</span></p></Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Page
'use client'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './login.scss'
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const page = () => {
    const { data, status } = useSession()
    const router = useRouter()
    status === 'loading' && <div>Loading...</div>
    status === 'authenticated' && router.push('/')

    const [details, setDetails] = useState({
        email: '',
        password: '',
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
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                ...details,
                redirect: false,
            });
            if (!res.ok) {
                toast.error(res.error)

            }
            if (res.ok) {

                toast.success("Login Successful")
            }

            // setDetails({
            //     email: '',
            //     password: '',
            // })
            // router.push("/")

        } catch (error) {

        }
    }



    return (
        <section className='login-background'>
            <div className="container">
                <div className="row m-1 m-md-0">
                    <div className="col-12 col-md-8 pt-3 col-lg-4 m-auto rounded-3 border login-container">
                        <form className="">
                            <h1 className='text-white fw-bold'>Login Form</h1>
                            <div className="credentials">
                                <div className="email">
                                    <span className='text-white'>Email: </span><br />
                                    <input type="email" value={details.email} name='email' onChange={handleDetails} placeholder='Input Email Here.' />
                                </div>
                                <div className="password">
                                    <span className='text-white'>Password: </span><br />
                                    <input type="password" value={details.password} name='password' onChange={handleDetails} placeholder='Input Password Here.' />
                                </div>
                            </div>
                            <div className="alternatives d-flex justify-content-between">
                                <div className="remember">
                                    <input type="checkbox" />
                                    <span className='ms-1 text-white'>Remember Me</span>
                                </div>
                                <div className='forget-password'>
                                    <p className='text-white'>Forgot password?</p>
                                </div>

                            </div>
                            <div className="submit">
                                <button onClick={handleSubmit}>LOGIN</button>
                            </div>
                            <div className="">
                                <p className='text-center mt-3 text-white'>---Or Login With---</p>
                                <p className='icon text-center'>
                                    <span className='me-3'>
                                        <FontAwesomeIcon icon={faFacebook} width='30px' />
                                    </span>
                                    <span onClick={() => signIn("google")}>
                                        <FontAwesomeIcon icon={faGoogle} width='30px' />
                                    </span>
                                </p>
                                <Link href='/register'> <p className='text-center text-white'>Don't have an account? <span className='text-decoration-underline'> Register Here</span></p></Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default page
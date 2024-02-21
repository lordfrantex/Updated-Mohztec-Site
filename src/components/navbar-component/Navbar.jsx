'use client'
import { faArrowDown, faBarsStaggered, faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useRef } from "react"
// import { useTheme } from '../../../context/ThemeContext.jsx'
import './navbar.scss'
import Link from "next/link"
import Image from "next/image"
import Aos from 'aos'
import { useEffect, useRef, useState } from "react"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import { getProjects } from "@/app/project/page"

function Header() {
    const { data, status } = useSession()
    const router = useRouter()

    const [toggleNav, setToggleNav] = useState(false)
    const [dropdownOverlay, setDropdownOverlay] = useState(false)
    const navLink = useRef()
    const handleClick = (e) => {
        setToggleNav(false)
    }

    return (

        <header className="header">
            <nav>

                <div className="container-xxl d-flex justify-content-between align-items-center">
                    <Link onClick={handleClick} href="/" className="navbar-brand">
                        <Image src='/mohztec-images/logo.png' alt="mohztec brand logo" height={90} width={90} />
                    </Link>
                    <ul className={`main-nav ${toggleNav && 'expand-nav'}`}>
                        <Link onClick={handleClick} href="/" className="navbar-brand d-md-none">
                            <Image src='/mohztec-images/logo.png' alt="mohztec brand logo" height={90} width={90} />
                        </Link>
                        <li className="nav-item " onClick={handleClick}><Link href="/">Home</Link> </li>
                        <li className="nav-item" onClick={handleClick}><Link href="/about">About</Link> </li>
                        <li className="nav-item" onClick={handleClick}><Link href="/services">Services</Link> </li>
                        <li className="nav-item" onClick={handleClick}><Link href="/project">Project</Link> </li>
                        <li className="nav-item" onClick={handleClick}><Link href="/blog">Our Blogs</Link> </li>
                        {/* <li className="nav-item" onClick={handleClick}><Link href="/training">Trainings</Link> </li> */}
                        <li className="nav-item" onClick={handleClick}><Link href="/contact">Contact us</Link> </li>
                        {data?.user?.role === 'admin' &&
                            <li className="nav-item" onClick={handleClick}><Link href="/admin-dashboard">Admin Dashboard</Link> </li>
                        }
                    </ul>
                    <div className="d-flex gap-3">
                        {status === 'unauthenticated' &&
                            <button onClick={() => router.push('/login')} className="btn btn-md login">Login</button>
                        }
                        {status === 'authenticated' &&
                            <div>
                                <div className="dropdown ">
                                    <div className="d-flex avatar" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            data.user.image ?
                                                <Image src={data?.user?.image} width={35} height={35} className="rounded-circle avatar" alt="profile-image"></Image>
                                                : <Image src="/mohztec-images/profile.jpg" width={35} height={35} className="rounded-circle" alt="profile-image" />
                                        }
                                        <span><FontAwesomeIcon icon={faSortDown} height={10} width={10} className="ms-1 mt-3 dropdown-toggle" /></span>
                                    </div>
                                    <ul className="dropdown-menu text-center">
                                        <p>{data.user.name}</p>
                                        <button className="btn btn-md w-75 logout" onClick={() => signOut()}>Logout</button>
                                    </ul>
                                </div>
                            </div>
                        }
                        <span onClick={() => setToggleNav(false)} className={`overlay ${!toggleNav && 'overlay-none'}`}></span>

                        <button className="hamburger-menu d-block d-md-none" onClick={() => setToggleNav(p => !p)}>
                            <span>
                                <FontAwesomeIcon icon={faBarsStaggered} width={30} height={30} fontSize='30px' />
                            </span>
                        </button>
                    </div>
                </div>
            </nav >

        </header >
    )
}

export default Header




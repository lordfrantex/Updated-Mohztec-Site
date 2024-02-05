"use client"
import Link from 'next/link'
import './page.scss'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook, faGears, faHamburger, faUpRightAndDownLeftFromCenter, faUser } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    const toggle = useRef()
    const [isOpened, setIsOpened] = useState(false)



    return (

        <div ref={toggle} className={`sidebar ${isOpened && "toggle-sidebar-open"}`}>
            <span className='toggle-sidebar' onClick={() => setIsOpened(prev => !prev)}>
                <FontAwesomeIcon icon={faBars} />
            </span>

            <ul className="admin-nav">
                <li className="nav-item">
                    <Link href="#" className="admin-nav-link d-flex" onClick={() => setIsOpened(false)}>
                        <span> <FontAwesomeIcon icon={faUser} className='me-3' color='white' /></span>
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/admin-dashboard/project" className="admin-nav-link d-flex" onClick={() => setIsOpened(false)}>
                        <span> <FontAwesomeIcon icon={faGears} className='me-3' color='white' /></span>
                        <span>Project</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/admin-dashboard/blog" className="admin-nav-link d-flex" onClick={() => setIsOpened(false)}>
                        <span> <FontAwesomeIcon icon={faBook} className='me-3' color='white' /></span>

                        <span> Blog </span>
                    </Link>
                </li>
                <li className="nav-item">

                    <Link href="#" className="admin-nav-link d-flex" onClick={() => setIsOpened(false)}>
                        <span> <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='me-3' color='white' /></span>
                        <span> Trainings </span>
                    </Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </div>
    )
}

export default Sidebar
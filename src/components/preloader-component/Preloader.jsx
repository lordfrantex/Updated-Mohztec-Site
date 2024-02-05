"use client"

import { useRef } from "react"
import './preloader.scss'

const Preloader = () => {
    const preloader = useRef()

    window.onload = () => {
        preloader.current.style.display = 'none'

    };

    return (
        <div ref={preloader} className="preloader">
            <img src="/mohztec-images/logo.png" alt="" />
        </div>
    )
}

export default Preloader
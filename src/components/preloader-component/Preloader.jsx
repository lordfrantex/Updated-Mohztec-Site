"use client"

import { useRef } from "react"
import './preloader.scss'
import Image from "next/image"

const Preloader = () => {
    const preloader = useRef()

    window.onload = () => {
        preloader.current.style.display = 'none'

    };

    return (
        <div ref={preloader} className="preloader">
            <Image height={100} width={100} src="/mohztec-images/logo.png" alt="" />
        </div>
    )
}

export default Preloader
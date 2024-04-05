"use client"
import { Typewriter } from 'react-simple-typewriter';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-simple-typewriter/dist/index'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import './blog.scss'



// import required modules
import { EffectCoverflow, Pagination, EffectFlip, Navigation, Autoplay } from "swiper";
import Image from 'next/image';



const TypeWriter = () => {
    return (
        <div className="blog-header mb-5 container-xxl">
            <div className="">
                <h3>Welcome to our
                    <span style={{ marginLeft: '10px' }}>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            delaySpeed={4000}
                            deleteSpeed={100}
                            words={['blog', 'archive', 'bookstore']}
                        />

                    </span> </h3>
                <p>Feed your mind with tech information...</p>
            </div>
        </div>
    )
}

export default TypeWriter



// SWIPER
export const SwiperComponent = () => {
    return (
        <div>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={false}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Image height={500} width={400} src="/mohztec-images/moses.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image height={500} width={400} src="/mohztec-images/Electrical/IMG_1990.JPG" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

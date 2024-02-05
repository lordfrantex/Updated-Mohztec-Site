'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './home-gallery.scss'
import Link from 'next/link';
import Image from 'next/image';

const HomeGallery = () => {
    const imageGallery = [
        "/mohztec-images/man1.jpg",
        "/mohztec-images/man2.jpg",
        "/mohztec-images/man1.jpg",
        "/mohztec-images/man2.jpg",
        "/mohztec-images/man1.jpg",

    ]
    const mapImages = imageGallery.map((img, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="gallery-image">
                    <img src={img} alt="image" />
                </div>
            </SwiperSlide>
        )
    })
    return (
        <div className="container-xxl">
            <div className="text-center">
                <div className="col-md-5 text-center heading-texts  m-auto container">
                    <h3 data-aos='fade-up' className='p-3 mb-3 rounded-pill  d-inline-block'>Photo Gallery</h3>
                    <h4 data-aos='fade-up'>View some of our outstanding works.</h4>
                </div>

            </div>
            <Swiper modules={[Navigation, Pagination, A11y, Autoplay]}
                // centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={5}
                slidesPerView="auto"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20

                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    865: {
                        slidesPerView: 4,
                        spaceBetween: 20

                    }
                }}
                navigation
                pagination={{ clickable: true }}
                grabCursor={true}
                loop={true}
                className={`display-container container-xxl`}
            >

                <div className="swiper-background">
                    {mapImages}
                </div>
            </Swiper >
        </div>

    )
}

export default HomeGallery



export const HeroSwiper = () => {

    const img = '/mohztec-images/solar1.jpg'
    const slideItems = [
        {
            title: 'Solar power system installation for homes and offices.'
        },
        {
            title: 'We provide the best and permanent electrical power solution '
        },
        {
            title: 'We provide unique services. Go Solar today with Mohztec Technologies'
        },
        {
            title: 'Secure your environment with Mohztec Technologies (CCTV Installation)'
        },
        {
            title: 'Integrate smart home automation with Mohztec\'s IoT '
        },
    ]

    const swiperSlide = slideItems.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="swiper-content row g-4">
                    <div className="col-12 col-md-8 m-auto col-lg-5 ">
                        <div className="swiper-desc text-center text-lg-start">
                            <h1 data-aos='fade-up'>{item.title}</h1>
                            <div className=" mt-5 enquiry">
                                <button className=''> <Link href="/request-quote">Get Quote</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <div className="swiper-image ">
                            <Image src={img} alt="" fill />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })


    return (
        <div>
            <Swiper modules={[Navigation, Pagination, A11y, Autoplay]}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                grabCursor={true}
                loop={true}
                className={`display-container container-xxl`}
            >
                <div className="swiper-background">
                    {swiperSlide}
                </div>
            </Swiper >
        </div>
    )
}

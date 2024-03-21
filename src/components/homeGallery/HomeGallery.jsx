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
import { Yellowtail } from 'next/font/google';

const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400" })
const HomeGallery = () => {
    const imageGallery = [
        "/mohztec-images/Solar/IMG_9504.jpg",
        "/mohztec-images/INVERTER-SETUP/IMG_8343.jpg",
        "/mohztec-images/cctv/IMG_8886.jpg",
        "/mohztec-images/lighting/IMG_7305.jpg",
        "/mohztec-images/solar/2023_01_04_18_36_IMG_1951.jpg",
        "/mohztec-images/INVERTER-SETUP/IMG_3830.jpg",

    ]
    const mapImages = imageGallery.map((img, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="gallery-image p-2">
                    <Image width={600} height={350} src={img} alt="image" />
                </div>
            </SwiperSlide>
        )
    })
    return (
        <div className="container-xxl">
            <div className="text-center">
                <div className="col-md-5 text-center heading-texts  m-auto container">
                    <h3 data-aos='fade-up' className={`p-3 mb-3 rounded-pill  d-inline-block ${yellowtail.className}`}>Photo Gallery</h3>
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
        </div >

    )
}

export default HomeGallery



export const HeroSwiper = () => {

    const slideItems = [
        {
            title: 'Solar power system installation for homes and offices.',
            img: "/mohztec-images/Solar/2023_04_20_20_05_IMG_9768.jpg"
        },
        {
            title: 'We provide the best and permanent electrical power solution ',
            img: "/mohztec-images/Electrical/IMG_1990.jpg"

        },

        {
            title: 'Secure your environment with Mohztec Technologies (CCTV Installation)',
            img: "/mohztec-images/CCTV/2022_06_28_14_41_IMG_1809.jpg"

        },
        {
            title: 'Integrate smart home automation with Mohztec\'s IoT ',
            img: "/mohztec-images/IOT/2024_03_19_15_10_IMG_0441.jpg"

        },
        {
            title: 'Interior decoration and aesthetics with Mohztec\'s lightenings ',
            img: "/mohztec-images/lighting/IMG_1991.jpg"

        },
        {
            title: 'We provide unique Solar-Inverter services. Go Solar today with Mohztec Technologies',
            img: "/mohztec-images/Solar/IMG-20240319-WA0008.jpg"

        },
    ]

    const swiperSlide = slideItems.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="swiper-content row g-4">
                    <div className="col-12 col-md-8 m-auto col-lg-5 ">
                        <div className="swiper-desc text-center text-lg-start">
                            <h1>{item.title}</h1>
                            <div className=" mt-5 enquiry">
                                <button className=''> <Link href="/request-quote">Get Quote</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <div className="swiper-image ">
                            <Image priority src={item.img} alt="" fill />
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
                    delay: 10000,
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






// export const HeroSwiper = () => {

//     const img = '/mohztec-images/solar1o.jpg'
//     const slideItems = [
//         {
//             title: 'Solar power system installation for homes and offices.'
//         },
//         {
//             title: 'We provide the best and permanent electrical power solution '
//         },
//         {
//             title: 'We provide unique services. Go Solar today with Mohztec Technologies'
//         },
//         {
//             title: 'Secure your environment with Mohztec Technologies (CCTV Installation)'
//         },
//         {
//             title: 'Integrate smart home automation with Mohztec\'s IoT '
//         },
//     ]

//     const swiperSlide = slideItems.map((item, index) => {
//         return (
//             <SwiperSlide key={index}>
//                 <div className="swiper-content row g-4">
//                     <div className="col-12 col-md-8 m-auto col-lg-5 ">
//                         <div className="swiper-desc text-center text-lg-start">
//                             <h1 data-aos='fade-up'>{item.title}</h1>
//                             <div className=" mt-5 enquiry">
//                                 <button className=''> <Link href="/request-quote">Get Quote</Link></button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-lg-6 ">
//                         <div className="swiper-image ">
//                             <Image priority src={img} alt="" width={1000} height={400} />
//                         </div>
//                     </div>
//                 </div>
//             </SwiperSlide>
//         )
//     })


//     return (
//         <div>
//             <Swiper modules={[Navigation, Pagination, A11y, Autoplay]}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 7000,
//                     disableOnInteraction: false,
//                 }}
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 grabCursor={true}
//                 loop={true}
//                 className={`display-container container-xxl`}
//             >
//                 <div className="swiper-background">
//                     {swiperSlide}
//                 </div>
//             </Swiper >
//         </div>
//     )
// }

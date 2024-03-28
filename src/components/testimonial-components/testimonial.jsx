
'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonial.scss";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { Yellowtail } from 'next/font/google'
const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400", display: "swap" })


const Testimonial = () => {

    const testimony = [
        {
            img: '/mohztec-images/testimony/ope.JPG',
            name: "Mr Ope",
            position: "C.E.O of Gadjet Care Technology",
            testimony: "Mohztec technologies are the best in solar technologies and CCTV installation. My solar setup and CCTV have been working 24/7 without any issues.",

        },
        {
            img: '/mohztec-images/testimony/femi.JPG',
            name: "Mr Femi",
            position: "Senior Software developer",
            testimony: " Mohztec Technologies are very reliable, and they as well use quality materials and equipment. My solar setup is over 2 years and still working perfectly.",

        },
        {
            img: '/mohztec-images/testimony/Prof S.A Adedunkan.JPG',
            name: "Prof S.A Adedunkan",
            position: "Professor/Director FUTA ",
            testimony: "Thanks to Mohztec Technologies, They rectified a very challenging electrical fault in the department when I was still the HOD of FWT, SAAT, FUTA.They are very responsive and kind as well.",

        },
        {
            img: '/mohztec-images/testimony/boli.jpg',
            name: "Shally tech",
            position: "C.E.O Boli Reloaded ",
            testimony: " Wow... I am super proud of Mohztec Technologies. They run my solar-inverter, electrical and lightings works. They are very good in what they do, i am always impressed with their skills and experienced performance, they can go extra miles just to satisfy client.",

        },
        {
            img: '/mohztec-images/testimony/sola.JPG',
            name: "Mr Shola",
            position: "C.E.O Mixi Arts",
            testimony: " Mohztec to the world 🌐. A company you can rely on. They handle all my electrical and solar work perfectly and up to satisfaction.",

        },
        {
            img: '/mohztec-images/testimony/jomiloju.jpg',
            name: " Jomiloju",
            position: "Senior Backend Engineer",
            testimony: "Thanks for the good and professional work. My solar, electrical, lighting are all done by Mohztec Technologies, They are the best. MOHZTEC OR NOTHING.",

        },
        {
            img: '/mohztec-images/testimony/samtop.jpg',
            name: "Samtop",
            position: "C.E.O Samtop",
            testimony: "Mohztec is amazing. All my home appliances are effectively running on solar. Uninterrupted power supply.",

        },
        {
            img: '/mohztec-images/testimony/shallangwa.jpg',
            name: "Officer Shallangwa",
            position: "NAF Officer",
            testimony: "Mohztec technologies installed a durable 2.5kva solar inverter system for me. Their work is very neat and quality, they have good customer service as well. Kudos to Mohztec Technologies.",

        },

    ]
    const mapTestimonies = testimony.map((testimony, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="testifiers">
                    <span className="right-quote">
                        <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                    </span>
                    <span className="left-quote">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                    </span>

                    <div className="image">
                        <Image src={testimony.img} alt="" fill />

                    </div>
                    <div className="texts">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>{testimony.testimony}</p>
                        <div className="name">
                            <span>{testimony.name}</span>
                            <span>{testimony.position}</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section className='testimonial'>
            <div className="heading-texts text-center">
                <h3 className={yellowtail.className}>Customers Testimonials</h3>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                slidesPerView="auto"
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="container"
            >
                {mapTestimonies}

            </Swiper>

        </section>
    )
}

export default Testimonial
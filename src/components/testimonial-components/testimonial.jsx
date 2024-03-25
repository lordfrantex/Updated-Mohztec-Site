
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
            testimony: "Mohztec technologies is the best in solar technologies. He installed a 2.5kva solar setup and it's still woking perfectly. Thank you sir, I sincerly appreciate your work.",

        },
        {
            img: '/mohztec-images/testimony/femi.JPG',
            name: "Mr Femi",
            position: "Senior Software developer",
            testimony: " Moses knows his craft very well. I had issues with my house wiring and within minutes, he has figured out the problem and restored my power, and up till now, i'm enjoying it.",

        },
        {
            img: '/mohztec-images/testimony/Prof S.A Adedunkan.JPG',
            name: "Prof S.A Adedunkan",
            position: "Professor/Director FUTA ",
            testimony: " Very responsive and kind as well. Treats customers with maximum respect. He did IoT home automation with Alexa and he delivered the job excellently",

        },
        {
            img: '/mohztec-images/testimony/boli.jpg',
            name: "Shally tech",
            position: "C.E.O Boli Reloaded ",
            testimony: " Wow... I am super proud of mohztec. He designed my workspace with beautiful interior lights and it's just so amazing.",

        },
        {
            img: '/mohztec-images/testimony/sola.JPG',
            name: "Mr Shola",
            position: "C.E.O Mixi Arts",
            testimony: " Thank you moses for all you do. Your kind gesture is very rare. You helped with my CCTV installation and also in giving professional consultancy advice.",

        },
        {
            img: '/mohztec-images/testimony/jomiloju.jpg',
            name: " Jomiloju",
            position: "Senior Backend Engineer",
            testimony: "Moses installed a 3.5kva inverter system and i have been enjoying unlimited power. Thanks for the good and professional work.",

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
            testimony: "Mohztec is amazing. All my home appliances are effectively running on solar. Uninterrupted power supply.",

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
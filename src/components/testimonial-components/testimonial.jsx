
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
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <Image src="/mohztec-images/man1.jpg" alt="" fill />

                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <Image src="/mohztec-images/man1.jpg" alt="" fill />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <Image src="/mohztec-images/man1.jpg" alt="" fill />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <Image src="/mohztec-images/man1.jpg" alt="" fill />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <Image src="/mohztec-images/man1.jpg" alt="" fill />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <Image src="/mohztec-images/man1.jpg" alt="" fill />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default Testimonial
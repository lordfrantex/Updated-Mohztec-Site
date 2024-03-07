

"use client"

import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, EffectFlip, Navigation, Autoplay } from "swiper";
import Link from 'next/link';
// import '../blog/blog.scss'
import './training.scss'

const Training = () => {

    const course = (

        // <div className="upcoming-course-card ">
        //     <div className="upcoming-course-card-image">
        //         <img src="/mohztec-images/solar3.jpg" alt="" />
        //     </div>
        //     <div className="upcoming-course-card-info">
        //         <button className='course-category'>Solar</button>
        //         <h4>The effective use of solar based gadgets at homes and offices</h4>
        //         <span><i className="fas fa-book-open"></i> 5 Lessons</span>
        //         <span><i className="fa-solid fa-user"></i> 35 Persons</span>
        //         <div className="tutor">
        //             <div className="tutor-image">
        //                 <img src="/mohztec-images/man1.jpg" alt="" />
        //             </div>
        //             <div className="tutor-info">
        //                 <h5>Johnson Mark</h5>
        //                 <p>Solar/Inverter Coach</p>
        //             </div>
        //         </div>
        //         <div className="course-price">
        //             <p> <strong> Price: #2500 </strong></p>
        //             <p className='enroll'><i className="fas fa-tags"></i> Get Enrolled</p>
        //         </div>
        //         <Link href={`/training/dommy`}> <button className='view-details'>View Details</button> </Link>
        //     </div>
        // </div>
    )
    return (
        // <div className='container-xxl'>
        //     <div className="blog-header  training-header">

        //         <div className="" style={{ textAlign: 'center' }}>
        //             <h3>Welcome to our Training Center.</h3>
        //             <p>Get our courses and be certified by</p>
        //             <p style={{ marginLeft: '10px', fontSize: '40px', textAlign: 'center', }}>MOHZTEC TECHNOLOGIES</p>
        //         </div>
        //         <div className="custom-shape-divider-bottom-1665219295">
        //             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        //                 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        //             </svg>
        //         </div>
        //     </div>
        //     <div className="about-section training-about-section">
        //         <div className="inner-section">
        //             <h3>About our training</h3>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt enim esse magnam minus nobis
        //                 obcaecati earum nam placeat. Excepturi, officiis dolore quos commodi saepe error aut architecto
        //                 dicta maiores.</p>
        //             <div className="achievements">
        //                 <h4>What you stand to benefit from our training</h4>
        //                 <li><i className="fa-solid fa-check-double"></i> Certification</li>
        //                 <li><i className="fa-solid fa-check-double"></i> Mentorship</li>
        //                 <li><i className="fa-solid fa-check-double"></i>Access to unlimited training materials</li>
        //             </div>
        //             <div className="social-icons">
        //                 <i className="fa-brands fa-facebook"></i>
        //                 <i className="fa-brands fa-linkedin"></i>
        //                 <i className="fa-brands fa-twitter"></i>
        //                 <i className="fa-brands fa-youtube"></i>
        //             </div>

        //         </div>
        //     </div>
        //     <div className="upcoming-courses">
        //         <h4 className='upcoming-title'>Explore Upcoming Courses</h4>
        //         <div className="upcoming-course-container">
        //             {course}
        //         </div>
        //     </div>
        //     <div className='blog-swiper student-testimony container'>
        //         <h4 className='upcoming-title'>Students Testimonials</h4>
        //         <Swiper
        //             effect={"coverflow"}
        //             grabCursor={true}
        //             centeredSlides={true}
        //             slidesPerView="auto"
        //             loop={true}
        //             autoplay={{
        //                 delay: 5000,
        //                 disableOnInteraction: false,
        //             }}
        //             coverflowEffect={{
        //                 rotate: 50,
        //                 stretch: 0,
        //                 depth: 100,
        //                 modifier: 1,
        //                 slideShadows: true,
        //             }}
        //             pagination={true}
        //             modules={[EffectCoverflow, Pagination, Autoplay]}
        //             className="mySwiper"
        //         >

        //             <SwiperSlide>
        //                 <div className="testimony"><p><strong>Franklyn</strong></p>
        //                     <div className="testimony-image">
        //                         <img src="/mohztec-images/man1.jpg" alt="" />
        //                     </div>
        //                     <p>Lorem ipsum dolor sit Exercitationem adipisci nam dicta non natus sit ut. Harum, unde odio  nesciunt eaque provident pariatur!
        //                     </p>
        //                     <i className="fas fa-quote-right"></i>
        //                 </div>

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className="testimony"><p><strong>Franklyn</strong></p>
        //                     <div className="testimony-image">
        //                         <img src="/mohztec-images/man1.jpg" alt="" />
        //                     </div>
        //                     <p>Lorem ipsum dolor sit Exercitationem adipisci nam dicta non natus sit ut. Harum, unde odio  nesciunt eaque provident pariatur!
        //                     </p>
        //                     <i className="fas fa-quote-right"></i>
        //                 </div>

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className="testimony"><p><strong>Franklyn</strong></p>
        //                     <div className="testimony-image">
        //                         <img src="/mohztec-images/man1.jpg" alt="" />
        //                     </div>
        //                     <p>Lorem ipsum dolor sit Exercitationem adipisci nam dicta non natus sit ut. Harum, unde odio  nesciunt eaque provident pariatur!
        //                     </p>
        //                     <i className="fas fa-quote-right"></i>
        //                 </div>

        //             </SwiperSlide>
        //         </Swiper>
        //     </div>
        //     <div className="container my-4">
        //         <h2 className='text-center'>Meet Our Instructors</h2>
        //         <div className="row justify-content-center  g-5">
        //             <div className="col-12 col-md-4 col-lg-3">
        //                 <div className="team-card ">
        //                     <div className="team-card-image">
        //                         <img src="//mohztec-images/moses.jpg" alt="" />
        //                     </div>
        //                     <p>Name: Moses Okocha</p>
        //                     <p className="title">Team Leader / C.E.O</p>
        //                 </div>
        //             </div>
        //             <div className="col-12 col-md-4 col-lg-3">

        //                 <div className="team-card">
        //                     <div className="team-card-image">
        //                         <img src="//mohztec-images/man1.jpg" alt="" />
        //                     </div>
        //                     <p>Name: Moses Okocha</p>
        //                     <p className="title">Team Leader / C.E.O</p>
        //                 </div>
        //             </div>
        //             <div className="col-12 col-md-4 col-lg-3">

        //                 <div className="team-card">
        //                     <div className="team-card-image">
        //                         <img src="//mohztec-images/man2.jpg" alt="" />
        //                     </div>
        //                     <p>Name: Moses Okocha</p>
        //                     <p className="title">Team Leader / C.E.O</p>
        //                 </div>
        //             </div>
        //             <div className="col-12 col-md-4 col-lg-3">

        //                 <div className="team-card">
        //                     <div className="team-card-image">
        //                         <img src="//mohztec-images/man2.jpg" alt="" />
        //                     </div>
        //                     <p>Name: Moses Okocha</p>
        //                     <p className="title">Team Leader / C.E.O</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="">hello world</div>
    )
}

export default Training
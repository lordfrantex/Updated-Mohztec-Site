import Link from 'next/link'
import './home-service.scss'
import { faBarChart, faBoltLightning, faCamera, faCameraAlt, faCameraRetro, faChartColumn, faCheck, faDashboard, faFileWaveform, faGlobeAfrica, faPhone, faPhoneSquare, faSignal, faSignal5, faSolarPanel, faThunderstorm, faUsersGear, faVideoCamera, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Testimonial from '../testimonial-components/testimonial'
import { Yellowtail } from 'next/font/google'
const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400", display: "swap" })

const HomeServices = () => {

    return (
        <section className=' mt-5'>
            <div className="container-xxl">
                <div className="col-md-5 text-center heading-texts  m-auto my-3 container">
                    <h3 className={`p-3 mb-3 rounded-pill  d-inline-block ${yellowtail.className}`}>Our Services</h3>
                    <h4 className=''>We Render High Quality Services</h4>
                    {/* <h3 data-aos='fade-up' className={`p-3 mb-3 rounded-pill  d-inline-block ${yellowtail.className}`}>Our Services</h3>
                    <h4 data-aos='fade-up' className=''>We Render High Quality Services</h4> */}
                </div>

                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12 ">
                            <div className="services border-end d-block d-md-flex gap-2">
                                <div className=" thumbnail ">
                                    <div className="pt-3">
                                        <FontAwesomeIcon icon={faSolarPanel} fontSize='45px' />
                                    </div>
                                </div>
                                <div className="service-details">
                                    <h4 className='align-right'>Solar Installation</h4>
                                    <p>We offer the best solution to interrupted power by providing solar installation services to our clients. Go solar Today!!! </p>
                                    <span className='d-block'>
                                        <Link href="/services">
                                            <span className="round me-3">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className=''>Read More</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                            <div className="services border-end d-block d-md-flex gap-2">
                                <div className=" thumbnail ">
                                    <div className="pt-3">
                                        <FontAwesomeIcon icon={faVideoCamera} fontSize='45px' />
                                    </div>
                                </div>
                                <div className="service-details">
                                    <h4 className='align-right'>CCTV Installation</h4>
                                    <p>We help our clients secure their properties, homes, offices, hospital and other valuable assets with our CCTV. Secure your assets with mohztec technologies!!! </p>
                                    <span className='d-block'>
                                        <Link href="/services">
                                            <span className="round me-3">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className=''>Read More</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                            <div className="services d-md-flex d-block gap-2">
                                <div className=" thumbnail ">
                                    <div className="pt-3">
                                        <FontAwesomeIcon icon={faGlobeAfrica} fontSize='45px' />
                                    </div>
                                </div>
                                <div className="service-details">
                                    <h4 className='align-right'>IoT Installation</h4>
                                    <p>Automate your electrical gadgets such as lights, fans, e.t.c with smart home automation techniques like Alexa and Aurduino.</p>
                                    <span className='d-block'>
                                        <Link href="/services">
                                            <span className="round me-3">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className=''>Read More</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                            <div className="services border-end d-block  d-md-flex gap-2">
                                <div className=" thumbnail ">
                                    <div className="pt-3">
                                        <FontAwesomeIcon icon={faBoltLightning} fontSize='45px' />
                                    </div>
                                </div>
                                <div className="service-details">
                                    <h4 className='align-right'>Electrical Installation</h4>
                                    <p>We are the best in electrical installations such as wiring of houses, beautiful interior decorations and fixing of house fittings. We also offer consultancy services.</p>
                                    <span className='d-block'>
                                        <Link href="/services">
                                            <span className="round me-3">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className=''>Read More</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                            <div className="services border-end d-block d-md-flex gap-2">
                                <div className=" thumbnail ">
                                    <div className="pt-3">
                                        <FontAwesomeIcon icon={faUsersGear} fontSize='45px' />
                                    </div>
                                </div>
                                <div className="service-details">
                                    <h4 className='align-right'>Training</h4>
                                    <p>Mohztec technologies have trainned  individuals who knew nothing related to technologies to become professionals and competent personnel in diverse areas such as CCTV,IoT,Solar,Electrical installation. </p>
                                    <span className='d-block'>
                                        <Link href="/services">
                                            <span className="round me-3">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className=''>Read More</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                            <div className="services d-block d-md-flex gap-2">
                                <div className=" thumbnail ">
                                    <div className="pt-3">
                                        <FontAwesomeIcon icon={faChartColumn} fontSize='45px' />
                                    </div>
                                </div>
                                <div className="service-details">
                                    <h4 className='align-right'>Sales of Materials</h4>
                                    <p>We also deal on  sales of electrical,solar,CCTV, IoT materials at affodable prices. Patronize Mohztec Technologies today!!!</p>
                                    <span className='d-block'>
                                        <Link href="/services">
                                            <span className="round   me-3">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className=''>Read More</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>



            <section className="my-5 ">
                <div className="about-container container-xxl">
                    <div className="col-md-5 text-center heading-texts my-3 m-auto">
                        <h3 className={`p-3  rounded-pill  d-inline-block ${yellowtail.className}`}>About Us</h3>
                    </div>
                    <div className="container-xl">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="">
                                    <h2 className='h1'>We provide top notch technological innovations in town.</h2>
                                    <p data-aos='fade-up'>Welcome to Mohztec Technologies, where innovation meets reliability. As a leading provider of solar,
                                        CCTV, and electrical solutions, we are dedicated to transforming the way you power and secure your world.
                                        Our commitment to excellence and sustainability
                                        sets us apart in the dynamic landscape of energy and security services.</p>
                                    <div data-aos='fade-up' className="row mt-5 credible-points">
                                        <div className="col-lg-6">
                                            <div className='d-flex align-items-center my-2  gap-2'>
                                                <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                <span>24/7 Call Services Available</span>
                                            </div>
                                            <div className='d-flex align-items-center my-2  gap-2'>
                                                <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                <span>Competent Consultants Available</span>
                                            </div>
                                            <div className='d-flex align-items-center my-2  gap-2'>
                                                <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                <span>Technological Innovations</span>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className='d-flex align-items-center my-2  gap-2'>
                                                <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                <span>Professional Services</span>
                                            </div>

                                            <div className='d-flex align-items-center my-2  gap-2'>
                                                <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                <span>Best Business Offers</span>
                                            </div>
                                            <div className='d-flex align-items-center my-2  gap-2'>
                                                <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                <span>Best Customers Services and Relations</span>
                                            </div>
                                        </div>
                                        <div className="  row g-2 mt-4 p-3">
                                            <div className="col-12 col-lg-6 ">

                                                <div className=" d-flex gap-2 avater align-items-center ">
                                                    <Image width={150} height={150} src="/mohztec-images/moses.jpg" className='side-image' alt="" />
                                                    <div className=" ">
                                                        <p className='m-0'>Engr. Moses Okocha</p>
                                                        <p className='m-0'>CEO & Founder</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 ">

                                                <div className=" d-flex gap-2 avater align-items-center ">
                                                    <div className="home-phone-complement-color">
                                                        <FontAwesomeIcon icon={faPhoneSquare} fontSize='50px' />
                                                    </div>
                                                    <div className="mt-1">
                                                        <h6 className='p-0 m-0'>Call us anytime</h6>
                                                        <p className='m-0'>+234 8051040368</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 m-auto col-lg-6 parent-experience">
                                <div className="home-about-image">
                                    <Image src="/mohztec-images/Solar/IMG-20240319-WA0008.jpg" fill alt="mohztec-technologies" />
                                    <Image src="/mohztec-images/Solar/screwdriver.jpg" width={1000} height={1000} className='side-image' alt="mohztec-technologies" />
                                </div>

                                <div className=" d-flex align-items-center gap-4  justify-content-between py-2 px-4 bg-dark text-white rounded-pill experience">
                                    <div className="">
                                        <h2 className='p-0 m-0'>5+ </h2>
                                        <p className='m-0'>Years</p>
                                    </div>
                                    <div className="">
                                        <p className='m-0'>Of Proficiency in technological innovations</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <section className=" container-xxl meet-ceo mt-5 ">
                    <div className="row g-3 justify-content-center align-items-center">
                        <div className="col-md-5">
                            <div className="about-text-block p-4 ">
                                <h2 className='fw-bold' data-aos="fade-up">Meet the C.E.O</h2>
                                <p data-aos="fade-up">
                                    Under the leadership of Engr. Moses Okocha, Mohztec Technologies has thrived as a beacon of innovation and sustainability. With a strategic vision that extends beyond industry norms,
                                    He has propelled the company towards new heights, fostering a culture of creativity, collaboration, and continuous improvement. Engr. Moses is not just a CEO, He is a visionary with a
                                    keen understanding of the broader social and environmental landscape. Outside the boardroom, He&apos;s is actively involved in community initiatives, and championing causes that align  the Company&apos;s values of making a positive impact.
                                </p>
                                <h3>Engr. Moses Okocha</h3>
                                <h5> <span><FontAwesomeIcon icon={faPhone} /></span> +234 8132790521</h5>
                            </div>
                        </div>
                        <div className="col-md-5 about-image-vector">
                            <div data-aos="zoom-in" className="about-image m-auto ">
                                <Image fill src="/mohztec-images/moses2.jpg" alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonial />
            </section>


        </section >

    )
}

export default HomeServices

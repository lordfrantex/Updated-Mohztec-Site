import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss'
import { faAddressBook, faClock, faMobileScreen, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { faFacebook, faInstagram, faLinkedinIn, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-xxl">
                    <div className="row g-3">
                        <div className="col-12 col-lg-4">
                            <div className=" ">
                                <div data-aos='fade-up' className="brand-logo">
                                    <Image src='/mohztec-images/logo.png' width={120} height={120} alt='' />
                                </div>

                                <div className="subscribe">
                                    <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam impedit, doloremque non iste expedita. Soluta animi quasi at laborum quidem.
                                        Perspiciatis, necessitatibus consequuntur libero quo quis voluptates laboriosam voluptatem!</p>
                                    <h3 data-aos='fade-up' className='my-5'>Subscribe To Our News Letter</h3>
                                    <div data-aos='fade-up' className="send">
                                        <input type="email" placeholder='Enter Your Email Here.' />
                                        <span className=''><FontAwesomeIcon icon={faPaperPlane} height={20} width={20} /></span>
                                    </div>
                                </div>
                                <div className='social-media overflow-hidden  my-4'>
                                    <h5 data-aos='fade-up' className=''>You can follow us on our social medias below:</h5>

                                    <div className="social-icons my-5 justify-content-lg-start justify-content-center">
                                        <span data-aos='zoom-in'>
                                            <Link href='https://www.facebook.com/p/Mohztec-Technologies-100057766414382/'>
                                                <FontAwesomeIcon icon={faFacebook} height={40} width={40} />
                                            </Link>
                                        </span>
                                        <span data-aos='zoom-in'>
                                            <Link href='https://www.tiktok.com/@mohztec'>
                                                <FontAwesomeIcon icon={faTiktok} height={40} width={40} />
                                            </Link>
                                        </span>
                                        <span data-aos='zoom-in'>
                                            <Link href='https://www.instagram.com/mohztectechnologies/'>
                                                <FontAwesomeIcon icon={faInstagram} height={40} width={40} />
                                            </Link>
                                        </span>
                                        <span data-aos='zoom-in'>
                                            <Link href='https://www.youtube.com/channel/UCy1RGhnaprl3vPVMSqWbpdA'>
                                                <FontAwesomeIcon icon={faYoutube} height={40} width={40} />
                                            </Link>
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-12 col-lg-8">
                            <div className="upper-col row g-3 text-center text-lg-start">
                                <div className="col-12 col-sm-4">
                                    <div data-aos='fade-up' className="footer-address">
                                        <FontAwesomeIcon icon={faAddressBook} width={70} height={70} />
                                        <h4>Addresses</h4>
                                        <p>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State, Nigeria.</p>
                                        <p>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State, Nigeria.</p>
                                        <p>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State, Nigeria.</p>

                                    </div>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <div data-aos='zoom-in' className="footercontact">
                                        <FontAwesomeIcon icon={faMobileScreen} width={70} height={70} />

                                        <div className="phonenumber">
                                            <h3 className='fw-bold'>Contacts</h3>
                                            <p>+234 8132790521</p>
                                            <p>+234 8051040368</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <div data-aos='zoom-in' className="footertime">
                                        <FontAwesomeIcon icon={faClock} width={70} height={70} />
                                        <h3 className='fw-bold'>Working Time</h3>
                                        <div className="workingtimeinfo">
                                            <p> Mon-Fri : 08.00AM - 06.00PM </p>
                                            <p> Saturday: 10.00AM - 05.00PM</p>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            <div className="lower-col mt-3 text-center text-lg-start g-3 row">
                                <div className="col-7 col-md-4">
                                    <div data-aos='zoom-in' className="quicklinks ">
                                        <h3 className='fw-bold'>Quick Links</h3>
                                        <ul className='ps-0'>
                                            <li> <a href="#"> Latest news and blogs</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Projects</a></li>
                                            <li><a href="#">Testimonies</a></li>
                                            <li><a href="#">Solar FAQ</a></li>
                                            <li><a href="#">Request for Quotation</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-5 col-md-4">

                                    <div data-aos='zoom-in' className="company">
                                        <h3 className='fw-bold'>Company</h3>
                                        <ul className='ps-0'>
                                            <li><a href="#"> Privacy Policy</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Patners and Sponsors</a></li>
                                            <li><a href="#">Term of Use</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-md-4">

                                    <div data-aos='zoom-in' className="footerproduct">
                                        <h3 className='fw-bold'>Products</h3>
                                        <ul className='ps-0'>
                                            <li><a href="#">Batteries</a></li>
                                            <li><a href="#">Solar Panels</a></li>
                                            <li><a href="#">Inverters</a></li>
                                            <li><a href="#">Solar Genarators</a></li>
                                            <li><a href="#">Solar Powered Devices</a></li>
                                            <li><a href="#">Solar Gadgets</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </footer >
            <div className="copywrite container-fluid text-center p-3">
                <p className=''>Copyright @ 2023 Mohztec Technologies All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer






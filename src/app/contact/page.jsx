"use client"
import React, { useState, useEffect, useRef } from 'react'
import './contact.scss'
import { faLocationDot, faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '@/components/title-component/Title'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import Link from 'next/link'



const Contact = () => {
    const form = useRef();

    const [isLoading, setIsLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.sendForm('service_aa19xkj', 'template_hkrlgs9', form.current, 'VcEDoiD7fAsK_FS9B')
            .then((result) => {
                toast.success("Email sent Successfully")
                setIsLoading(false)
            }, (error) => {
                console.log(error.text);
                toast.error("Something went wrong.")
                setIsLoading(false)

            });
    };

    return (
        <div>
            <section>

                <Title title="Contact Us" />
                <div className='main-form container'>
                    <form className="d-block d-md-flex " ref={form} onSubmit={sendEmail}>
                        <div className="contact_form">
                            <h3>Send a Message</h3>
                            <p>* All fields are required.</p>
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <div className="form">
                                        <label>Name: </label><br />
                                        <input name='from_name' type="text" required placeholder='Enter your name here.' />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form">
                                        <label> Email: </label><br />
                                        <input name='from_email' type="email" required placeholder='Enter your name here.' />
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <div className="form">
                                        <label> Subject: </label><br />
                                        <input name='subject' type="text" required placeholder='Enter subject here.' />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form">
                                        <label> Phone: </label><br />
                                        <input name='from_number' type="text" required placeholder='Enter your phone number here.' />
                                    </div>
                                </div>
                            </div>
                            <label>Message:</label>
                            <textarea className='message' required name="message" cols="30" rows="7"
                                placeholder="Write your message here..."></textarea>
                            <div className="contact-submit">
                                <button type="submit" disabled={isLoading}>{isLoading ? "Sending..." : "Send"}</button>
                            </div>

                        </div>
                        <div className="contact_details">
                            <div className="contact_info">
                                <h3>Contact Info</h3>
                                <div className="contacts">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State.</p>
                                </div>
                                <div className="contacts">
                                    <FontAwesomeIcon icon={faSquareEnvelope} />
                                    <p> lordfranktex@gmail.com </p>
                                </div>
                                <div className="contacts d-flex align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div>
                                        <p className='m-0'>+234 8132790521</p>
                                        <p className='m-0'>+234 8051040368</p>
                                    </div>

                                </div>
                                <div className="social-icons">

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
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.578698942828!2d5.149164414473121!3d7.2886804947392925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b97ce47798d9b%3A0x426a4e9d0256165d!2sMohztec%20Technologies!5e0!3m2!1sen!2sng!4v1659522607947!5m2!1sen!2sng"
                                    width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </form>

                </div>
            </section >
        </div >
    )
}

export default Contact
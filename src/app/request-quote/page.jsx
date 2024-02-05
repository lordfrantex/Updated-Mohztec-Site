"use client"


import React, { useState } from 'react';
import './request-quote.scss'; // Import the SCSS file
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';


const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        loads: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phoneNumber, message, loads } = formData
        if (!name || !email || !phoneNumber || !message || !loads) {
            toast.error("Please fill in all the required information")
            return null
        }
        // You can send the form data to your server or handle it as needed
    };

    return (
        <div className="container try">
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="">
                        <div className="quote-page">
                            <h1>Request a Quote</h1>
                            <p>Your email address will not be published. Required fields are marked *
                            </p>
                            <form onSubmit={handleSubmit} className="quote-form">
                                <label>
                                    *Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                </label>
                                <br />

                                <label>
                                    *Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </label>
                                <br />

                                <label>
                                    *Phone Number:
                                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                </label>
                                <br />
                                <label>
                                    *Required Load/Devices to be powered:
                                    <input type="text" name="loads" value={formData.loads} onChange={handleChange} />
                                </label>
                                <br />

                                <label>
                                    *Message:
                                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                                </label>
                                <br />

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-5">

                    <div className="border">
                        <Image src="/mohztec-images/solar1.jpg" alt='quote-img' height={300} width={600} />
                    </div>
                    <h1>How it works?</h1>

                    <div className="d-flex gap-3 mt-3 steps">
                        <FontAwesomeIcon icon={faCheckCircle} fontSize={40} width={40} />
                        <div className="">
                            <h3 className='fw-bold'>Step 1</h3>
                            <p>Submit the details of the quotation you want</p>
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-3 steps">
                        <FontAwesomeIcon icon={faMessage} fontSize={40} width={40} />
                        <div className="">
                            <h3 className='fw-bold'>Step 2</h3>
                            <p>We will contact you to get additional info if needed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

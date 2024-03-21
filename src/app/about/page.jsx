import Link from 'next/link'
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faCheckDouble, faEye, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Title from '@/components/title-component/Title'
const About = () => {
    return (
        <section className="about-us">
            <Title title="About Us" />
            <div className='container-xxl'>

                <div className="about-section container m-auto my-3">
                    <div className="inner-section ">
                        <h1 className='fw-bold'>Who Are We?</h1>
                        <p className='mb-3'>We are Mohztec Technologies, a dynamic, legal and Professional company that embraces diversity, creativity, and excellence in every facet of our operations. From harnessing the power of the sun to ensuring the safety of your spaces through cutting-edge surveillance, and delivering reliable electrical services, we stand as a comprehensive solution provider committed to empowering individuals and businesses alike.</p>
                        <div className="achievements">
                            <h3 className='fw-bold'>Our Core Values</h3>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Top Notch Innovation</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Customer-Centric Approach</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Quality Job Delivery</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Sustainability</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Excellence</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Professionalism</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} /> Honesty</li>

                        </div>
                        <div className="social-icons mt-4">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faTiktok} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>

                    </div>
                </div>
                <div className="container my-5">

                    <div className="row g-5 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mission p-4 text-center rounded-5">
                                <FontAwesomeIcon icon={faPenNib} />
                                <h4 className='fw-bold'>Mission</h4>
                                <p>Our mission is to revolutionize the way energy is harnessed and security is ensured. We believe in going beyond the ordinary, pushing boundaries, and leaving an indelible mark on the industry and the communities we serve.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="vision p-4 text-center rounded-5">
                                <FontAwesomeIcon icon={faEye} />
                                <h4 className='fw-bold'>Vision</h4>
                                <p>Through our commitment to excellence, environmental stewardship, and customer-centricity, we aspire to lead the way in delivering innovative solutions and cutting-edge technologies, and elevate our services to new heights</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 m-auto">
                    <div className="choose_us p-3">
                        <h2 className='text-center'>Why Choose Us?</h2>
                        <FontAwesomeIcon icon={faAnchor} />
                        <p className='fs-4'>
                            Firtly, we have proven track records of successful projects and satisfied clients. Our portfolio showcases a range of completed ventures, highlighting our competence and reliability. In addition to that,
                            we prioritize transparent and open communication with our clients - you will be informed at every stage of the project, ensuring a smooth and collaborative experience. Also, we provide diverse services whether you need solar installations, advanced CCTV systems, or electrical services, Mohztec Technologies is your one-stop solution. Our comprehensive service portfolio allows us to meet diverse needs under one roof.

                            Choose Mohztec Technologies for a partnership built on innovation, sustainability, and excellence. Join us in creating a future where energy is clean, security is advanced, and electrical solutions are reliable.
                        </p>
                    </div>
                </div>
                <div className="container my-4">
                    <h2 className='text-center fw-bold'>Professional Team Members</h2>
                    <div className="row justify-content-center  g-5">
                        <div className="col-12 col-md-4 col-lg-3">

                            <div className="team-card p-3">
                                <div className="team-card-image">
                                    <Image fill src="/mohztec-images/team/moses2.jpg" alt="" />
                                </div>
                                <p>Name: Moses Okocha</p>
                                <p className="title">Team Leader / C.E.O</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="team-card p-3">
                                <div className="team-card-image">
                                    <Image fill src="/mohztec-images/team/frank.jpeg" alt="" />
                                </div>
                                <p>Name: Kanebi Franklyn</p>
                                <p className="title">Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">

                            <div className="team-card p-3">
                                <div className="team-card-image">
                                    <Image fill src="/mohztec-images/team/ope.jpg" alt="" />
                                </div>
                                <p>Name: Moses Okocha</p>
                                <p className="title">Field Cordinator</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">

                            <div className="team-card p-3">
                                <div className="team-card-image">
                                    <Image fill src="/mohztec-images/team/emeka.jpg" alt="" />
                                </div>
                                <p>Name:Okocha Emeka</p>
                                <p className="title">Human Resource Manager</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About


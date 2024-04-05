import './blog.scss';



import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import TypeWriter, { SwiperComponent } from './TypeWriter';
import Image from 'next/image';
import { Yellowtail } from 'next/font/google'
import parse from 'html-react-parser';
const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400", display: "swap" })

const fetchBlog = async (data) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?category=${data || ""}`, { cache: "no-cache" });
        // const res = await fetch(`${process.env.process.env.NEXT_PUBLIC_BASE_URL}/api/blog?category=${data || ""}`, { cache: "no-cache" });
        return res.json()
    } catch (error) {
        console.log(error);
    }
}


const Blog = async ({ searchParams }) => {
    const { category } = searchParams
    const blog = await fetchBlog(category)
    const blogs = blog?.length > 0 && (
        blog?.map(({ imgURL, title, description, id, createdAt, author }, index) => {
            return (
                <div key={id} className="blog-card col-12 col-md-6 col-lg-4">
                    <div className="border rounded-5 ">
                        <Image height={250} width={400} src={imgURL} alt={title} />
                        <h4 className='mx-2 fw-bold fs-5'>Title: {title}</h4>
                        <div className="d-flex p-2 align-items-center justify-content-between info">
                            <span className=' fst-italic'>{createdAt.substring(0, 10)}</span>
                            <span className='author ms-auto fst-italic'>By {author}</span>
                        </div>

                        <div className='mx-2 trim'> {parse(description)} </div>

                        <Link href={`/blog/${id}`}> <button>Read More</button></Link>
                    </div>
                </div>
            )
        })

    )
    return (
        <div>
            <TypeWriter />
            <div className="blog-posts container p-3">
                <div className="row g-4">
                    {blogs}
                </div>
            </div>



            <div className="technology my-5 container border">

                <SwiperComponent />
                <div className='tech-writeup'>
                    <h4 className={yellowtail.className}>Technology</h4>
                    <p>Technological innovation stands as a cornerstone of human progress, bringing about transformative changes across multiple spheres of life including electrical, CCTV, and IoT technologies, leading to remarkable advancements and benefits.</p>
                    <p>In the electrical domain, innovations such as smart grids, energy-efficient appliances, and renewable energy sources have revolutionized power distribution and consumption. Smart grids enable efficient monitoring and management of electricity flow, optimizing energy usage and reducing wastage. </p>
                    <p>IoT (Internet of Things) technologies have ushered in a new era of connectivity and automation. IoT devices, such as smart sensors and actuators, enable the integration of physical devices with the internet, allowing for seamless data exchange and automation of various processes. In sectors like home automation, healthcare, and manufacturing, IoT technologies enhance efficiency, convenience, and productivity.</p>

                    <div className="tech-icons">
                        <p> Follow us via </p>
                        <div className="icons ">

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
        </div >
    )
}

export default Blog
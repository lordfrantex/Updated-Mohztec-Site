import './blog.scss';



import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import TypeWriter, { SwiperComponent } from './TypeWriter';


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
                        <img src={imgURL} alt={title} />
                        <h4 className='mx-2'><strong>{title}</strong></h4>
                        <div className="d-flex mx-2 justify-content-between">
                            <strong className='posted-at'>{createdAt.substring(0, 10)}</strong>
                            <strong className='author ms-auto'>By {author}</strong>
                        </div>
                        <p className='mx-2'>{description}</p>
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
                <div className="tech-writeup">
                    <h4>Technology</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error aspernatur itaque,
                        consequatur pariatur dolorem mollitia. Ipsa minus pariatur in ad aut! Temporibus corrupti
                        nisi atque tenetur incidunt, obcaecati iste?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error aspernatur itaque,
                        consequatur pariatur dolorem mollitia. Ipsa minus pariatur in ad aut! Temporibus corrupti
                        nisi atque tenetur incidunt, obcaecati iste?</p>
                    <div className="tech-icons">
                        <p> Follow us via </p>
                        <div className="icons ">
                            <FontAwesomeIcon icon={faFacebook} width={30} height={30} />
                            <FontAwesomeIcon icon={faTwitter} width={30} height={30} />
                            <FontAwesomeIcon icon={faLinkedinIn} width={30} height={30} />
                            <FontAwesomeIcon icon={faTiktok} width={30} height={30} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Blog
import './services.scss'
import { faBoltLightning, faBookJournalWhills, faHome, faSolarPanel, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '@/components/title-component/Title'
import Achievements from '@/components/achievement-component/Achievements'
const Services = () => {
    const services = [
        {
            id: 1,
            icon: faSolarPanel,
            title: 'Solar-Inverter Installation',
            desc: "Our solar solutions are designed to harness the sun's energy efficiently. From residential rooftop installations to large-scale commercial projects, we tailor our solar systems to meet your specific needs. Going solar with us means reducing your carbon footprint while enjoying sustainable and cost-effective energy solutions."

        },
        {
            id: 2,
            icon: faBoltLightning,
            title: 'Electrical Installation',
            desc: "We offer professional electrical wiring services that form the backbone of a safe and efficient electrical infrastructure. Our expert electricians are equipped to handle a wide range of wiring needs, ensuring that your residential, commercial, or industrial space is powered with precision and reliability. We ensure safety, compliance and competence."
        },

        {
            id: 3,
            icon: faVideoCamera,
            title: 'CCTV Installation',
            desc: "Security is a priority in today's world, and our CCTV systems are crafted to ensure peace of mind. We offer state-of-the-art surveillance solutions, combining advanced technology with user-friendly interfaces. Protect your property with our comprehensive CCTV installations, tailored to meet your security requirements."
        },
        {
            id: 4,
            icon: faBoltLightning,
            title: 'IoT and Home Automation',
            desc: "In the era of connectivity, the Internet of Things (IoT) has emerged as a transformative force, reshaping the way we live and interact with our surroundings.  We bring the power of IoT to your doorstep, offering cutting-edge home automation solutions that seamlessly integrate technology into the fabric of your daily life."
        },
        {
            id: 5,
            title: 'Interior Lighteninigs',
            icon: faHome,
            desc: "We believe that lighting is not just about illuminating a space; it's about creating an atmosphere, enhancing aesthetics, and optimizing functionality. Our interior lighting solutions are crafted to transform your living and working environments, striking the perfect balance between style and practicality."
        },
        {
            id: 6,
            title: 'Training',
            icon: faBookJournalWhills,
            desc: "At Mohztec Technologies, we understand the pivotal role that ongoing education and skill development play in personal and professional growth. Our comprehensive and well tailored training services are designed to empower individuals and organizations, fostering a culture of continuous learning and innovation."
        },
    ]
    const mapServices = services.map((service, i) => {
        return (
            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
                <div className="service ">
                    <div className="image">
                        <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <div className="title">
                        <h4>{service.title}</h4>
                    </div>
                    <div className="container">
                        <div className="lines">
                            <div className="circle"></div>
                        </div>
                    </div>


                    <div className="description">
                        <p>{service.desc}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <Title title="Our Services" />
            <div className=" container my-5">
                <div className=" row g-4">
                    {mapServices}
                </div>
            </div>




            <Achievements />

        </section>
    )
}

export default Services
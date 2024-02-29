import Link from 'next/link'
import './title.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Yellowtail } from 'next/font/google'
const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400" })
const Title = (props) => {
    return (
        <div className="title-header container-xxl">
            <h1 className={yellowtail.className}>{props.title}</h1>
            <div className="title-header-nav">
                <Link href="#">Home</Link>
                <FontAwesomeIcon icon={faArrowRight} />
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default Title
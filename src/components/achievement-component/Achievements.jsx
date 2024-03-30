import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPersonChalkboard, faSmileBeam, faSmileWink, faUserGear, faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import './achievements.scss'
import { Yellowtail } from 'next/font/google'
const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400", display: "swap" })

const Achievements = () => {


    return (
        <div>
            <div className="container-xxl  my-5 show-bar-container p-1">
                <div className=" container">
                    <div className="text-center home-achievements">
                        <span className={yellowtail.className}>Our Achievements</span>
                    </div>
                    <div className="row g-4  justify-content-center">
                        <div data-aos='zoom-in' className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="unit  p-2">
                                <p className="icon"> <FontAwesomeIcon icon={faSmileBeam} /></p>
                                <h4 className='fw-bold'><span className='me-2'>520</span>+</h4>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div data-aos='zoom-in' className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="unit  p-2">
                                <p className="icon"> <FontAwesomeIcon icon={faCheckCircle} /></p>
                                <h4 className='fw-bold'><span className='me-2'>310</span>+</h4>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                        <div data-aos='zoom-in' className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="unit  p-2">
                                <p className="icon"> <FontAwesomeIcon icon={faPersonChalkboard} /></p>
                                <h4 className='fw-bold'><span className='me-2'>250</span>+</h4>
                                <p>Honest Reviews</p>
                            </div>
                        </div>

                        <div data-aos='zoom-in' className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="unit  p-2">
                                <p className="icon"> <FontAwesomeIcon icon={faUserGear} /></p>
                                <h4 className='fw-bold'><span className='me-2'>40</span>+</h4>
                                <p>Trained Personnels</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Achievements
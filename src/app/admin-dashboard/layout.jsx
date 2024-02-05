import Link from 'next/link'
import './page.scss'
import Sidebar from './Sidebar'
import ProtectedRoute from '@/providers/ProtectedRoute'
const layout = ({ children }) => {
    return (
        <ProtectedRoute>
            <section className='container-xxl'>
                <Sidebar />
                <div className="row">

                    <div className="ms-5 col">
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </ProtectedRoute>
    )
}

export default layout
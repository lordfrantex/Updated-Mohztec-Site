'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import '../app/admin-dashboard/page.scss'

const ProtectedRoute = ({ children }) => {
    const renderRedirectPage = (
        <div className="redirect-page">
            <p>You are not authorized to view this page</p>
            <Link className="text-decoration-underline" href='/'>Go to home page</Link>
        </div>
    )

    const { data: session } = useSession();

    return (
        (
            (session && session.user.role === 'admin') ? <div>{children}</div> : renderRedirectPage
        )

    )
}

export default ProtectedRoute
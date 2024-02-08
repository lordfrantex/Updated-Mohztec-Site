import './globals.scss'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar-component/Navbar'
import Footer from '@/components/footer-component/Footer'
import { ThemeContext, useTheme } from '../../context/ThemeContext'
// import BootstrapClient from '@/components/bootstrapClient/bootstrapClient'
import BootstrapClient from '../components/bootstrapClient/BootstrapClient'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import AOSInit from '@/components/Aos-component/Aos'
import AuthProvider from '@/providers/AuthProvider'
import Preloader from '@/components/preloader-component/Preloader'
import ToastContext from '../../context/ToastContext'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export const metadata = {

  title: 'Mohztec Technologies',
  description: 'Mohztec Technologies | Experts in Solar, Electrical, and IoT installations; together with sales of solar and electrical materials. ',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>

        <AuthProvider>
          <ThemeContext>
            {/* <Preloader /> */}
            <ToastContext />
            <BootstrapClient />
            <AOSInit />
            <Navbar />
            {children}
            <Footer />
          </ThemeContext>
        </AuthProvider>
      </body>
    </html>
  )
}

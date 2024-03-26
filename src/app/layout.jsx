import './globals.scss'
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
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Montserrat, } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'], weight: "700" })
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
config.autoAddCss = false


export const metadata = {

  title: 'Mohztec Technologies ▶️ Solar | CCTV | Electrical | IoT | Training ',
  description: 'Mohztec Technologies is a leading, global and technological company that provides cutting-edge innovations through expertise in Solar, CCTV, Electrical, and IoT installations; together with sales of quality materials such as Solar Panel, Solar Battries, Electrical Cables, CCTV Cameras, e.t.c. ',
}


export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={montserrat.className}>

        <AuthProvider>
          <ThemeContext>
            {/* <Preloader /> */}
            <SpeedInsights />
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

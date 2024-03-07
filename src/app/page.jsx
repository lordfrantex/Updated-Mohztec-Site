import Image from 'next/image'
import './page.scss'
import HomeServices from '@/components/homeServices-component/HomeServices';
import Achievements from '@/components/achievement-component/Achievements';
import Link from 'next/link';
import HomeGallery, { HeroSwiper } from '@/components/homeGallery/HomeGallery';


const Home = () => {

  return (
    <main>
      {/* <HeroSwiper /> */}
      <section>
        <HomeServices />
      </section>
      <section>
        <HomeGallery />
      </section>
      <section>
        <Achievements />
      </section>
    </main>

  )
}

export default Home
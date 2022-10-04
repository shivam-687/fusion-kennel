import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ClickBait from '../components/ClickBait'
import ClientTestimonialSlider from '../components/ClientTestimonialSlider'
import AboutUs from '../components/sections/landing-page/AboutUs'
import Hero from '../components/sections/landing-page/Hero'
import Memories from '../components/sections/landing-page/Memories'
import OurDogs from '../components/sections/landing-page/OurDogs'
import Puppies from '../components/sections/landing-page/Puppies'
import WhyChooseUs from '../components/sections/landing-page/WhyChooseUs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Fusion Kennel|Best Place to find you furry freind</title>
    </Head>

    <Hero/>
    <AboutUs/>
    <Puppies/>
    <OurDogs/>
    <WhyChooseUs/>
    {/* <Memories/> */}
    <ClientTestimonialSlider/>
    <ClickBait/>
    </>
  )
}

export default Home

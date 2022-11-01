import React from 'react'
import Content from '../../../lib/Content'
import Image from 'next/image'
import SectionTitle from '../../SectionTitle'
import { Fade } from 'react-awesome-reveal'

function AboutUs() {

    const image = '/assets/images/hero/h-5.jpg'

    return (
        <section className=' mt-40 bg-primary/20 px-5 py-10'>
            <div className='container mx-auto '>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="flex flex-col gap-5 justify-center h-full">
                        <SectionTitle>{Content.landingAbout.title}</SectionTitle>
                        <div className='overflow-hidden'>
                            <Fade direction='down' triggerOnce>
                                <p className='text-lg leading-relaxed'>
                                    {
                                        Content.landingAbout.text
                                    }
                                </p>
                            </Fade>
                        </div>
                        <div className="overflow-hidden">
                            <Fade direction='down' triggerOnce>
                                <p className='text-lg font-semibold'>
                                    {
                                        `${Content.landingAbout.name}`
                                    }
                                    <span className='font-normal ml-3 inline-block'>({Content.landingAbout.job})</span>
                                </p>
                            </Fade>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='lg:max-w-lg w-full relative h-min'>
                            <div className="dog-image aspect-square relative w-full overflow-hidden">
                                <Image src={Content.landingAbout.image} alt="" layout="fill" objectFit="cover"></Image>
                            </div>
                            <div className="absolute w-64 h-64 -right-4 -bottom-4 bg-gradient-to-tr from-primary to-accent -z-10 blur-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
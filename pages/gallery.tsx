import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { DogApi } from '../lib/Dogs'
import Image from 'next/image';

const OurPuppies: NextPage<{ dogPics: string[] }> = ({ dogPics }) => {

    useEffect(() => {
        console.log('Gallery: ', dogPics)
    }, [dogPics])

    return (
        <>
            <Head>
                <title>Fusion Kennel|Best Place to find you furry freind</title>
            </Head>
            <section>
                <div className="container mx-auto px-5 mt-20">
                    <SectionHeader title='Our Dogs' />

                    <div className="mt-20 grid grid-cols-1 gap-2 xs:gap-3 md:gap-5 sm:grid-cols-2 mg:grid-col-3 lg:grid-cols-4">
                        {
                            dogPics.map((dogImage, index) => {
                                return <div key={index} className='bg-gray-200 break-inside-avoid-column relative'>
                                    <div className=" dog-image aspect-square relative w-full hover:border-primary shadow-none transition hover:shadow-lg hover:shadow-primary/20">
                                       <Image src={dogImage} alt={dogImage} layout="fill" objectFit="cover"></Image>
                                    </div>
                                    {/* <Image src={dogImage} alt={dogImage} layout="fill" objectFit="cover"></Image> */}
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}


export function getStaticProps() {
    const dogPics = DogApi.getAllDogPhotos();
    return {
        props: {
            dogPics,
        },
    }
}

export default OurPuppies
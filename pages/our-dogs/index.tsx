import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ClickBait from '../../components/ClickBait'
import DogCard from '../../components/DogCard'
import SectionHeader from '../../components/SectionHeader'
import { Dog, DogApi } from '../../lib/Dogs'

const OurDogs: NextPage<{ dogs: Dog[] }> = ({ dogs }) => {

    useEffect(() => {
        console.log('Our dogs: ', dogs)
    }, [dogs])

    return (
        <>
            <Head>
                <title>Fusion Kennel|Best Place to find you furry freind</title>
            </Head>
            <section>
                <div className="container mx-auto px-5 mt-20">
                    <SectionHeader title='Our Dogs' />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
                        {
                            dogs.map((dog, index) => {
                                return <div key={index}>
                                    <DogCard {...dog} />
                                </div>
                            })
                        }
                    </div>

                    <div className='py-10'>
                        <ClickBait />
                    </div>
                </div>
            </section>
        </>
    )
}


export function getStaticProps() {
    const dogs = DogApi.dogsNotForAdoption();
    return {
        props: {
            dogs,
        },
    }
}

export default OurDogs
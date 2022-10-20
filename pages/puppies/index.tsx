import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import DogCard from '../../components/DogCard'
import PuppyCard from '../../components/PuppyCard'
import SectionHeader from '../../components/SectionHeader'
import { Dog, DogApi } from '../../lib/Dogs'

const OurPuppies: NextPage<{dogs: Dog[]}> = ({dogs}) => {

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
                                    <PuppyCard {...dog} title={dog.name} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}


export function getStaticProps(){
    const dogs = DogApi.dogsForAdoption();
    return {
        props: {
          dogs,
        },
      }
}

export default OurPuppies
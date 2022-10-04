import React, { useEffect, useState } from 'react'
import { DogApi } from '../../../lib/Dogs';
import DogCard, { DogCardProps } from '../../DogCard'
import SectionHeader from '../../SectionHeader'

function OurDogs() {
  const [dogs, setDogs] = useState<DogCardProps[]>([]);

  useEffect(() => {
    const pp = DogApi.dogsNotForAdoption(3).map(d => {
        return {
            image: d.image,
            breed: d.breed,
            name: d.name
        } as DogCardProps;
    });
    setDogs(prev => [...pp])
}, [])
  return (
    <section className='px-5 mt-40'>
        <div className="container mx-auto">
            <SectionHeader title='Our Dogs' link='#'/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 content-center justify-items-center">
                {
                    dogs.map((pup, index) => {
                        return <div className="max-w-md w-full" key={index}>
                            <DogCard {...pup} ></DogCard>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default OurDogs
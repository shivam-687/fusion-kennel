import React, { useEffect, useState } from 'react'
import Dogs, { DogApi } from '../../../lib/Dogs'
import PuppyCard, { PuppyCardProps } from '../../PuppyCard';
import SectionHeader from '../../SectionHeader'

function Puppies() {
    const [puppies, setPuppies] = useState<PuppyCardProps[]>([])

    useEffect(() => {
        const pp = DogApi.dogsForAdoption(4).map(d => {
            return {
                title: d.name,
                id: d.id,
                image: d.image,
                age: d.age,
                breed: d.breed
            } as PuppyCardProps;
        });
        setPuppies(prev => [...pp])
    }, [])
  return (
    <section className='px-5 mt-40'>
        <div className="container mx-auto">
            <SectionHeader title='Puppies' link='#'/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 content-center justify-items-center">
                {
                    puppies.map((pup, index) => {
                        return <div className="max-w-md w-full" key={index}>
                            <PuppyCard {...pup} ></PuppyCard>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Puppies
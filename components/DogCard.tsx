import React from 'react'
import { NavLink } from './Navlink'
import Image from 'next/image';

export type DogCardProps = {
    name: string;
    image: string;
    breed: string;
}
function DogCard(props: DogCardProps) {
    return (
        <NavLink href={'#'}>
            <a className='block max-w-md w-full '>
                <div className=" dog-image aspect-square relative w-full overflow-hidden hover:border-primary shadow-none transition hover:shadow-lg hover:shadow-primary/20">
                    <Image src={props.image} alt={props.name} layout="fill" objectFit="cover"></Image>
                </div>
                <div className="p-5 flex justify-between items-center">
                    <h3 className='text-xl font-semibold uppercase line-clamp-1'>{props.name}</h3>
                    <p className='text-gray-400 capitalize'>{props.breed}</p>
                </div>
            </a>
        </NavLink>
    )
}

export default DogCard
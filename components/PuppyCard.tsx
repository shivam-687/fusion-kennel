import React from 'react'
import Image from 'next/image';
import { NavLink } from './Navlink';

export type PuppyCardProps = {
    id: string,
    title: string,
    image: string;
    age: string,
    breed: string
}

function PuppyCard(props: PuppyCardProps) {
    return (
        <div className='max-w-md w-full block border border-black hover:border-primary shadow-none transition hover:shadow-lg hover:shadow-primary/20  '>
            <div className="dog-image aspect-video relative w-full overflow-hidden">
                <Image src={props.image} alt={props.title} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-5">
                    <h4 className='text-xl font-semibold line-clamp-1'>{props.title}</h4>
                    <p className='text-base text-gray-400'>{props.age}</p>
                </div>
                {/* <p className='text-gray-400 mb-5'>{props.breed}</p> */}
                <NavLink href={`#`}>
                    <a className='btn btn-secondary'>Details</a>
                </NavLink>
            </div>
        </div>
    )
}

export default PuppyCard
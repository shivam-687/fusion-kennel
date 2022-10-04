import React from 'react'
import Image from 'next/image';

export type ClientTestimonialSlideProps = {
    name: string;
    text: string,
    image: string
}

function ClientTestimonialSlide(props: ClientTestimonialSlideProps) {
    return (
        <div className='w-full h-full flex-col md:flex-row flex gap-10'>
            <div className="max-w-xs w-full">
                <div className=" dog-image aspect-square relative w-full overflow-hidden hover:border-primary shadow-none transition hover:shadow-lg hover:shadow-primary/20">
                    <Image src={props.image} alt={props.name} layout="fill" objectFit="cover"></Image>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <p className='text-gray-400 max-w-lg'>{props.text}</p>
                <p className='text-lg font-bold '>{props.name}</p>
            </div>
        </div>
    )
}

export default ClientTestimonialSlide
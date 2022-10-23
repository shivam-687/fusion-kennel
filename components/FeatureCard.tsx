import Image from 'next/image'
import React from 'react'

export type FeatureCardProp = {
    icon?: string,
    title: string,
    description: string
}

function FeatureCard(props: FeatureCardProp) {
  return (
    <div className='border border-gray-400 flex flex-col items-center gap-5 p-5'>
        <span className={`w-14 h-14 relative inline-block ${props.icon ? '':'bg-gray-300'}`}>
            {
                props.icon && <Image src={props.icon} alt={props.title} layout="fill" objectFit="contain"></Image>
            }
        </span>

        <h3 className="text-xl font-semibold">{props.title}</h3>
        <p className="text-center">{props.description}</p>
    </div>
  )
}

export default FeatureCard
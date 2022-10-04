import React, { useEffect, useState } from 'react'
import Content from '../lib/Content';
import Image from 'next/image'

export type ClickBaitContent = {
    title: string,
    image: string,
    text: string
}

function ClickBait() {
    const [content, setContent] = useState<ClickBaitContent | null>(null);

    useEffect(() => {
        setContent(Content.clickBait);
    }, [])

    return (
        <div className='mt-40 bg-primary'>
            {
                content &&
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center content-center items-center'>
                    <div className='w-full h-96 relative'>
                        <div className='absolute w-full h-[550px] left-0 bottom-0 flex justify-center'>
                            <div className="dog-image aspect-portrait relative h-full overflow-hidden">
                                <Image src={content.image} alt={content.title} layout="fill" objectFit="cover"></Image>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 max-w-2xl'>
                        <h2 className='text-4xl font-bold'>{content.title}</h2>
                        <p className='leading-relaxed'>{content.text}</p>
                        <button className='btn btn-secondary max-w-min'>Whatsapp</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ClickBait
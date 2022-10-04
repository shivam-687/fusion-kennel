import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Content from '../../../lib/Content';
import { NavLink } from '../../Navlink';
import SectionHeader from '../../SectionHeader'
import SectionTitle from '../../SectionTitle';

export type WhyChooseUsData = {
    image: string,
    data: { icon: string, title: string, text: string }[]
}

function WhyChooseUs() {
    const [content, setContent] = useState<WhyChooseUsData | null>(null);

    useEffect(() => {
        setContent(Content.whyChooseUs);
    }, [])

    return (
        <section className='px-5 mt-40 bg-secondary text-white'>
            <div className="container mx-auto">
                {/* <SectionHeader title='Why Choose Us' /> */}
                {
                    content
                    &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                        <div className='flex flex-col gap-5 justify-center'>
                            <SectionTitle>Why Choose Us</SectionTitle>
                            {
                               content.data.map((cont, index) => {
                                    return <div className="flex gap-5 border border-primary p-3" key={index}>
                                                <div className='flex-grow-0 flex items-center justify-center'>
                                                    <Image src={cont.icon} alt={cont.title} width="60" height={60}></Image>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold">{cont.title}</h3>
                                                    <p>{cont.text}</p>
                                                </div>
                                            </div>
                                })
                            }
                            <div className='mt-5'>
                                <NavLink href={'#'}>
                                    <a className='btn btn-primary'>ENQUIRY</a>
                                </NavLink>
                            </div>
                        </div>
                        <div className='p-5 md:p-10'>
                            <div className=" dog-image aspect-square relative w-full overflow-hidden hover:border-primary shadow-none transition hover:shadow-lg hover:shadow-primary/20">
                                <Image src={content.image} alt={'why choose us'} layout="fill" objectFit="cover"></Image>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default WhyChooseUs
import React, { useEffect, useState } from 'react'
import Content from '../../../lib/Content';
import SectionHeader from '../../SectionHeader'
import Image from 'next/image';
import GalleryGridItem from '../../GalleryGridItem';
import { NavLink } from '../../Navlink';
import Link from 'next/link';

function Memories() {
    const [images, setImage] = useState<string[]>([]);

    useEffect(() => {
        setImage(Content.clientImages);
    }, [])

    return (
        <section className='px-5 mt-40 pb-40'>
            <SectionHeader title='Memories' link='#' />
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3  min-h-[calc(100vh-100px)]">
                    <div className=' md:row-span-2 p-2'>
                        <GalleryGridItem image={images[0]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className=' md:row-span-2 p-2'>
                        <GalleryGridItem image={images[0]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className=' md:row-span-3 p-2'>
                        <GalleryGridItem image={images[0]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    {/* <div className='p-2 md:row-span-3'>
                        <div className='flex flex-col gap-3 items-center justify-center p-5 text-center h-full bg-primary'>
                        <h3 className="text-2xl font-bold text-primary-content">Our Pet Owner Memories</h3>
                        <Link href={'#'}>
                            <a className='btn btn-secondary'>See More</a>
                        </Link>
                        </div>
                    </div> */}
                    <div className=' md:row-span-3 md:col-span-2 p-2'>
                        <GalleryGridItem image={images[0]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Memories
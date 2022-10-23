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
        <section className='px-5 mt-40'>
            <div className="container mx-auto">
            <SectionHeader title='Memories' link='#' />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 min-h-[calc(100vh-100px)]">
                    <div className="aspect-square md:aspect-auto md:row-span-2 md:col-start-1 md:col-end-3">
                        <GalleryGridItem image={images[0]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className="aspect-square md:aspect-auto md:col-start-3 md:col-span-2">
                        <GalleryGridItem image={images[1]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className="aspect-square md:aspect-auto md:col-start-3 md:col-span-2">
                        <GalleryGridItem image={images[2]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className="aspect-square md:aspect-auto">
                        <GalleryGridItem image={images[3]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className="aspect-square md:aspect-auto">
                        <GalleryGridItem image={images[4]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                    <div className="aspect-square md:aspect-auto">
                        <GalleryGridItem image={images[5]}>
                            <div></div>
                        </GalleryGridItem>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Memories
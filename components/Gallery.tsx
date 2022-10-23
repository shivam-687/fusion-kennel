
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from 'react-simple-image-viewer';
import SectionHeader from "./SectionHeader";
import {Fade} from 'react-awesome-reveal';

export type GalleryProps = {
    gallery: string[],
    title?: string,
    link?: string
}


const Gallery = ({ gallery, title, link }: GalleryProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: any) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <div>

            {title&&<SectionHeader title={title} link={link} />}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">

                {
                    gallery.length ?
                        gallery.map((img, index) => {
                            return <div key={index} className="overflow-hidden p-2 ">
                                <Fade direction="left">
                                    <div key={index} className=" p-5 cursor-pointer aspect-video backdrop-blur relative w-full hover:border-primary shadow-none hover:shadow-lg hover:shadow-primary/20  overflow-hidden border border-black  transition duration-300" onClick={() => openImageViewer(index)}>
                                        <Image src={img} alt="" layout="fill" objectFit="cover"></Image>
                                    </div>
                                </Fade>
                            </div>

                        }) : null
                }

            </div>

            {isViewerOpen && (
                <ImageViewer
                    src={gallery}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                    backgroundStyle={{zIndex: 111111}}
                />
            )}
        </div>
    )
}

export default Gallery;
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperNavButton from './SwiperNavButton';
import ClientTestimonialSlide, { ClientTestimonialSlideProps } from './ClientTestimonialSlide';
import Content from '../lib/Content';
import SectionTitle from './SectionTitle';



function ClientTestimonialSlider() {
    const [clientSlide, setClientSlides] = useState<ClientTestimonialSlideProps[]>([]);

    useEffect(() => {
      setClientSlides(Content.clientTestimonial);
    }, [])
    

    return (
        <>
            <section className="mt-40">
            <div className="container mx-auto px-5 mb-10">
                <div className="flex items-center justify-center mb-10"><SectionTitle>What Our Client Say</SectionTitle></div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y,]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        620:{
                            slidesPerView: 2
                        }
                    }}
                >
                    {
                        clientSlide.map((cs, index) => {
                            return  <SwiperSlide key={index} className="p-5"><div className='flex justify-center'><ClientTestimonialSlide {...cs} /></div></SwiperSlide>
                        })
                    }
                   
                    <div className="wrapper-end">
                        <div className='p-5 flex items-center justify-center gap-5'>
                            <SwiperNavButton type='prev' />
                            <SwiperNavButton type='next' />
                        </div>
                    </div>
                </Swiper>
            </div>
            </section>
        </>

    )
}

export default ClientTestimonialSlider
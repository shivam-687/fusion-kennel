import React from 'react'
import { useSwiper } from 'swiper/react';
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'

function SwiperNavButton(props: {type: 'next'|'prev'}) {
    const swiperInst = useSwiper();
  return (
    <button className='btn btn-square btn-xs'  onClick={() => props.type === 'next'?swiperInst.slideNext():swiperInst.slidePrev()}>{
        props.type ==='next' ? <BiChevronRight/> : <BiChevronLeft/>
    }</button>
  )
}

export default SwiperNavButton

import React, { useRef, useState } from "react";
import CommentCard from '../Comments/CommentCard/CommentCard';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"

import "./stylesComment.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCube, Pagination
} from 'swiper';
import Card from "../../Pages/Facturacion/Components/Card/Card";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);


export default function SwiperComments({ comments, options}) {
  
  
  return (
    <>
    { comments &&
      <Swiper slidesPerView={3} spaceBetween={10} pagination={{
        "clickable": true
      }} breakpoints={{
        "@0.00": {
          "slidesPerView": 1,
          "spaceBetween": 10
        },
        "@0.75": {
          "slidesPerView": 2,
          "spaceBetween": 20
        },
        "@1.00": {
          "slidesPerView": 3,
          "spaceBetween": 40
        }
      }} className="mySwiper">
        {comments.map(comment => (
          <SwiperSlide><CommentCard comment={comment} /></SwiperSlide>
        ))}
      </Swiper>
    }
      {options &&
        <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
          "shadow": true,
          "slideShadows": true,
          "shadowOffset": 20,
          "shadowScale": 0.94
        }} pagination={true} className="mySwiper">
          {options.map(opntion => (
            <SwiperSlide key={opntion.id}><Card option={opntion} key={opntion.id}/></SwiperSlide>
        ))}

        </Swiper>
      
    }
    </>
  )
}

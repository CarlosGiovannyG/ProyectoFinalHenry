
import React, { useRef, useState } from "react";
import CommentCard from '../Comments/CommentCard/CommentCard';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import "./stylesComment.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,EffectCube, Pagination
} from 'swiper';
import Card from "../../Pages/Facturacion/Components/Card/Card";
import CardKitchen from "../../Pages/Kitchen/Components/CardKitchen/CardKitchen";

// install Swiper modules
SwiperCore.use([EffectCoverflow,EffectCube, Pagination]);


export default function SwiperComments({ comments, options, infoKitchen, infoKitchenBill}) {
  
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
            <SwiperSlide key={opntion.id}><Card option={opntion} /></SwiperSlide>
        ))}
        </Swiper>
      
      }


      {
        infoKitchen && 
        <Swiper slidesPerView={5} spaceBetween={20} pagination={{
        "clickable": true
        }}
        className="cardsCocina">
          {infoKitchen.map(info => (
            <SwiperSlide key={info._id}><CardKitchen info={info} /></SwiperSlide>
        ))}
        </Swiper>
      }

      {infoKitchenBill &&

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
          {infoKitchenBill.map(detalle => (
            <SwiperSlide><CommentCard infoKitchenBill={detalle} /></SwiperSlide>
          ))}
        </Swiper>
      
      }
    </>
  )
}

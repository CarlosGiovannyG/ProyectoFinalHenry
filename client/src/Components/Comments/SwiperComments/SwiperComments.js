
import React, { useRef, useState } from "react";
import CommentCard from '../CommentCard/CommentCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./stylesComment.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function SwiperComments({comments}) {
  
  
  
  return (
    <>
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
  <SwiperSlide><CommentCard comment={comment}/></SwiperSlide>
  ))}
  </Swiper>
    </>
  )
}
import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

const items = [
  {
    src: require('../../img/landing1.jpg'),
    altText: 'Slide 1',
  },
  {
    src: require('../../img/landing2.jpg'),
    altText: 'Slide 2',
  },
  {
    src: require('../../img/landing3.jpg'),
    altText: 'Slide 3',
  },
  {
      src: require('../../img/landing4.jpg'),
      altText: 'Slide 4',
  },
  {
      src: require('../../img/landing5.jpg'),
      altText: 'Slide 5',
  }
];

export default function NewSwiper() {

  
    return (
        <>
          <Swiper 
          style={{width: '100%', height: '847px'}}
          spaceBetween={0} centeredSlides={true} autoplay={{
            "delay": 4000,
            "disableOnInteraction": false
          }}
          pagination={{
            "clickable": true
          }}
          navigation={true} className="mySwiper">
          <SwiperSlide style={{ cursor: 'context-menu' }} ><img src={items[0].src} alt={items[0].alt} /></SwiperSlide>
          <SwiperSlide style={{ cursor: 'context-menu' }}><img src={items[1].src} alt={items[1].alt} /></SwiperSlide>
          <SwiperSlide style={{ cursor: 'context-menu' }}><img src={items[2].src} alt={items[2].alt} /></SwiperSlide>
          <SwiperSlide style={{ cursor: 'context-menu' }}><img src={items[3].src} alt={items[3].alt} /></SwiperSlide>
          <SwiperSlide style={{ cursor: 'context-menu' }}><img src={items[4].src} alt={items[4].alt} /></SwiperSlide>
          </Swiper>
        </>
    )
}
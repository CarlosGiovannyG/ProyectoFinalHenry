import React from 'react';
import s from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from 'react-hooks-use-modal';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
<<<<<<< HEAD
=======

>>>>>>> f89f8eab38b725efeca6ec99bcdf0b41782fbebc

const items = [
    {
      src: require('../../img/landing1.jpg'),
      altText: 'Slide One',
     
    },
    {
      src: require('../../img/landing2.jpg'),
      altText: 'Slide Two',
      
    },
    {
      src: require('../../img/landing3.jpg'),
      altText: 'Slide Three',
      
    }
];

export default function Home(){
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const [Modal, open] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: true
    });

    const itemLength = items.length - 1

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem 
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className={s.img} src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    })


    return (
        <div >
            <div className={s.carousel} >
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                    <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                </Carousel>
            </div>
            <div className={s.header}>
                <h1 className={s.title} >Henry</h1>
                <div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        <button className={s.btnsHeader} onClick={()=>{navigate('/Menu')}} >MENU</button>
                        <button className={s.btnsHeader} >ABOUT US</button>
                        <button  className={s.btnsHeader}>CONTACT</button>
                        <button className={s.btnsHeader} onClick={() => { navigate("/facturar") }}>CHECK IN</button>
                    </div>
                    <div className={s.btnDiv2}>
                        <button className={s.btnsHeader}  >LOG IN</button>
                        <button className={s.btnsHeader} onClick={open} >SIGN UP</button>
                    </div>
                </div>
            </div>
            <div style={{position: 'absolute'}} >
                <Modal>
                    <div className={s.modal}>
                        <SignUpForm />
                    </div>
                </Modal>
            </div>
        </div>
    )

}


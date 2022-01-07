import React from 'react';
import s from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { useModal } from 'react-hooks-use-modal';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LogInForm from '../../Components/LogInForm/LogInForm';
import icon from '../../img/MAIN_ICON.png';
import { CSSTransition } from 'react-transition-group';

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

export default function Home(){
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const [inProp, setInProp] = React.useState(true); // CSS transition group
    const [Modal, open] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [Modal2, open2] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    

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
                key={item.altText}
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
                <img className={s.icon} src={icon} alt='Restaurant Logo' />
                <div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        <button className={s.btnsHeader} onClick={()=>{navigate('/Menu')}} >MENU</button>
                        <button className={s.btnsHeader} >ABOUT US</button>
                        <button  className={s.btnsHeader}>CONTACT</button>
                        <button className={s.btnsHeader} onClick={() => { navigate("/bills") }}>CHECK IN</button>
                    </div>
                    <div className={s.btnDiv2}>
                        <button className={s.btnsHeader} onClick={open2} >LOG IN</button>
                        <button className={s.btnsHeader} onClick={open} >SIGN UP</button>
                    </div>
                </div>
            </div>
                <div style={{position: 'absolute'}} >
                <Modal>
                    <CSSTransition
                    in={inProp}
                    timeout={0}
                    appear={true}
                    key={0}
                    classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone}}
                    >
                        <div className={s.modal}>
                            <SignUpForm />
                        </div>
                    </CSSTransition>
                </Modal>
            
                <Modal2>
                    <CSSTransition
                    in={inProp}
                    timeout={0}
                    appear={true}
                    key={0}
                    classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone}}
                    >
                        <div className={s.modal2}>
                            <LogInForm />
                        </div>
                    </CSSTransition>
                </Modal2>
            
                </div>
                
        </div>
    )

}


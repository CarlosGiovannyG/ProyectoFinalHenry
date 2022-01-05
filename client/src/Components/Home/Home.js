import React from 'react';
import s from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
      src: require('../../img/restaurant.jpg'),
      altText: 'Slide One',
     
    },
    {
      src: require('../../img/slide_13.jpg'),
      altText: 'Slide Two',
      
    },
    {
      src: require('../../img/slide_16.jpg'),
      altText: 'Slide Three',
      
    }
];

export default function Home(){
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

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
                <img src={item.src} alt={item.altText} width="100%" height='800px' />
            </CarouselItem>
        );
    })

    return (
        <div>
            <div className={s.header}>
                <h1 className={s.title}>Henry Restaurant</h1>
                <div className={s.headerbtns}>
                    <button className={s.btnLogIn} onClick={()=>{navigate('/LogIn')}} >Log In</button>
                    <button className={s.btnSignUp} onClick={()=>{navigate('/SignUp')}} >Sign Up</button>
                </div>
            </div>
            <div >
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
            <footer>
                Contacto
            </footer>
        </div>
    )

}
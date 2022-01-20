import React from "react";
import s from './Info.module.css';
import Card from '../Card/Card';
import RestaurantIcon from '../../../../img/MAIN_ICON.png';
import LandingOrder from '../../../../img/LandingOrder.png';
import LandingKitchen from '../../../../img/LandingKitchen.png';
import LandingBills from '../../../../img/LandingBills.png';
import juan from '../../../../img/Miembros/juan.jpg';
import giovanny from '../../../../img/Miembros/giovanny.jpg';
import axel from '../../../../img/Miembros/axel.jpg';
import rafa from '../../../../img/Miembros/rafa.jpeg';

const cards = [
    {
        name: 'Carlos Giovanny Gualtero Londoño',
        git: 'https://github.com/CarlosGiovannyG',
        linkedin: 'https://www.linkedin.com/in/carlos-gualtero/',
        mail: 'cgig82@gmail.com',
        img: giovanny
    },
    {
        name: 'Juan Diego Fernández Bottarini',
        git: 'https://github.com/JDFBdev',
        linkedin: 'https://www.linkedin.com/in/jdfbdev/',
        mail: 'JDFBdeveloper@gmail.com',
        img: juan
    },
    {
        name: 'Axel Castillo Azuara',
        git: 'https://github.com/MrGeodude',
        linkedin: 'https://www.linkedin.com/in/axel-castillo-azuara/',
        mail: 'axelcastillo690@gmail.com',
        img: axel
    },
    {
        name: 'Rafael Sarria Salcedo',
        git: 'https://github.com/SarriaRafael',
        linkedin: 'https://www.linkedin.com/in/rafael-sarria-salcedo-74a121219/',
        mail: '',
        img: rafa
    },
]

export default function Info(){

    return(
        <div className={s.main}>
            <div className={s.about}>
                <div className={s.Headline}>
                    <div className={s.line}/>
                    <h2 className={s.title}>About</h2>
                    <div className={s.line}/>
                </div>
                <div className={s.aboutItems} >
                    <div className={s.aboutText} >
                        <h3 className={s.h3}>Henry Restaurant <br/>The all-in-one manager <br/> for your gastronomy business.</h3>
                        <p className={s.p}>Allow us to introduce you to all the solutions <br/>we can offer to improve your customer service,<br/> kitchen, billing and administration.</p>
                    </div>
                    <img className={s.aboutImage} src={RestaurantIcon} />
                </div>
            </div>

            <div className={s.module}>   
                <div className={s.Headline}>
                    <div className={s.line}/>
                    <h2 className={s.title}>Solutions</h2>
                    <div className={s.line}/>
                </div>
                <div className={s.moduleText} >
                    <h3 className={s.subtitle}>Customer Log In, Cart, profile and automatic billing.</h3>
                    <p className={s.p}>Your customer can create an account,  add address for  delivery and a<br/> payment method. They are able to order, make a  reservation, <br/>edit their cart and access  all past bills.</p>
                </div>
                <img className={s.moduleImage} src={LandingOrder}/>
            </div>

            <div className={s.moduleLine} />

            <div className={s.module}>
                <div className={s.moduleText} >
                    <h3 className={s.subtitle}>Interactive kitchen interface for orders.</h3>
                    <p className={s.p}>Bills can be accessed by the staff, whom will be able to edit, create, <br/>sort and filter bills by client, table, status and / or description.</p>
                </div>
                <img className={s.moduleImage} src={LandingKitchen}/>
            </div>

            <div className={s.moduleLine} />

            <div className={s.module}>
                <div className={s.moduleText} >
                    <h3 className={s.subtitle}>Complete billing administration.</h3>
                    <p className={s.p}>Bills can be accessed by the staff, whom will be able <br/>to edit, create, sort and filter bills by client, table,<br/> status and / or description.</p>
                </div>
                <img className={s.moduleImage} src={LandingBills}/>
            </div>

            <div className={s.about}>
                <div className={s.Headline}>
                    <div className={s.line}/>
                    <h2 className={s.title}>About Us</h2>
                    <div className={s.line}/>
                </div>
                <div className={s.aboutUsItems} >
                    <h3 className={s.aboutUsSubtitle}>We are a team of full stack students from the Henry <br/>Intensive Bootcamp who were challenged to create a <br/>fully functioning E-Commerce app as a final project.</h3>
                    <div className={s.cards}   >
                        {
                            cards.map(c=>(
                                <Card member={c} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
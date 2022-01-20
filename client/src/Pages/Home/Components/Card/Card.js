import React from "react";
import s from './Card.module.css';
import git from '../../../../img/Contact Icons/LOGO_GITHUB.png';
import link from '../../../../img/Contact Icons/LOGO_LINKEDIN.png';
import mail from '../../../../img/Contact Icons/LOGO_GMAIL.png';

export default function Card({ member }) {

    return (
        <div className={s.container} >
            <img className={s.img} alt="img" src={member.img} />
            <div className={s.text}>
                <p className={s.name}>{member.name}</p>
                <div className={s.icons}>
                    <img className={s.icon} src={link} alt="linkedin" onClick={() => { window.open(member.linkedin, '_blank') }} />
                    <img className={s.icon} src={git} alt='git' onClick={() => { window.open(member.git, '_blank') }} />
                    <img className={s.icon} src={mail} alt='mail' onClick={() => { window.open(member`mailto:${member.mail}?`, '_blank') }} />
                </div>
            </div>
        </div>
    )
}
import React, { useRef, useState } from "react";
import s from './CommentCard.module.css';

export default function CommentCard({comment}) {


    return(
        <div className={s.container} >
            <div className={s.title}>{comment.title}</div>
            <label className={s.comment}>{comment.comment}</label>
        </div>
    )

}
import React, { useRef, useState } from "react";
import s from './CommentCard.module.css';

export default function CommentCard({comment}) {

    console.log(comment)

    return(
        <div className={s.container} >
            <div className={s.title}>{comment.title}</div>
            <textarea className={s.comment}>{comment.comment}</textarea>
        </div>
    )

}
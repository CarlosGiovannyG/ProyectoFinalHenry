import React, { useRef, useState } from "react";
import s from './CommentCard.module.css';

export default function CommentCard({ comment, infoKitchenBill}) {

    
    return(
        <>
            {comment &&
                <div className={s.container} >
                    <div className={s.title}>{comment.title}</div>
                    <div className={s.comment}>{comment.comment} </div>
                </div>
            }
            {infoKitchenBill && 
                <div className={s.container} >
                    <div className={s.title}>{infoKitchenBill.name}</div>
                    <label className={s.comment}>{infoKitchenBill.price}</label>
                </div>
            }
       </>
    )

}
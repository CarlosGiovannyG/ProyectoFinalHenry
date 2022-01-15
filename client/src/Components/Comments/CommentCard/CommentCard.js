import React from "react";
import s from './CommentCard.module.css';

export default function CommentCard({ comment }) {


    return (
        <>
            {comment &&
                <div className={s.container} >
                    <div className={s.title}>{comment.title}</div>
                    <div className={s.comment}>{comment.comment} </div>
                </div>
            }

        </>
    )

}
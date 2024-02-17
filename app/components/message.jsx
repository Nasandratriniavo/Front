import React from 'react'
import style from './message.module.css'
import Image from "next/image";
import botImage from "./../../public/bot.jpg"


export default function Message(msg) {
    return (
        <div style={{justifyContent:(msg.position === "left") ? "left":"right"}} className={style.message}>
            <Image style={{display:(msg.position === "left")?"inline":"none"}} src={botImage} alt=""/>
            <div>
                {msg.content}
            </div>
        </div>
    )
    
}

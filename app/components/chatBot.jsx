import React from 'react'
import style from './chat-bot.module.css'
import Image from "next/image";
import botImage from "./../../public/bot.jpg"
import sendImage from "./../../public/send.png"
import Message from './message';

export default function ChatBot() {
  return (
    <div className={style.chatBotContainer}>
        <div>
            <Image src={botImage} alt=""/>
            <p>ChatBot</p>
        </div>
        <div>
            <div>
              <Message position="right" content=" sopjfposjf sfsepofsùpfo se  seojfpesf sefposjùspof sefpùojfsùpofj"/>
              <Message position="left" content="bonjour"/>
              <Message position="right" content=" sopjfposjf sfsepofsùpfo se  seojfpesf sefposjùspof sefpùojfsùpofj"/>
              <Message position="left" content="bonjour"/>
              <Message position="right" content=" sopjfposjf sfsepofsùpfo se  seojfpesf sefposjùspof sefpùojfsùpofj"/>
              <Message position="left" content="bonjour"/>
              <Message position="right" content=" sopjfposjf sfsepofsùpfo se  seojfpesf sefposjùspof sefpùojfsùpofj"/>
              <Message position="left" content="bonjour"/>
              <Message position="left" content="bonjour"/>
            </div>
        </div>
        <div>
            <input type="text" placeholder='Envoyer un message'/>
            <Image src={sendImage} alt=""/>
        </div>
    </div>
  )
}

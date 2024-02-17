import React from 'react';
import style from "./home.module.css";
import ChatBot from '../../components/chatBot';


export default function page() {
  return (
    <div className={style.home} data-aos="fade-in">
        <span>Bienvenue</span>
        <ChatBot />
    </div>
  )
}

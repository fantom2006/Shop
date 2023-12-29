import React from 'react';
import "./FooterStyle.scss";
import { SlSocialVkontakte } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import Logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footers">
     <div className="buyer">
        <p className='buyers'>Покупателям</p>
        <ul className='buyers-p'>
          <li>Как это работает </li>
          <li>Защита покупателя</li>
          <li>Условия оплаты </li>
          <li>Условия использования </li>
          <li>Регистрация аккаунта </li>
        </ul>
      </div>

      <div className="supplier">
        <p className='suppliers'>Поставщикам</p>
        <ul className='suppliers-p'>
          <li>Как стать продавцом</li>
          <li>Правила участия </li>
          <li>Личный кабинет продавца </li>
        </ul>
      </div>

      <div className="company">
        <p className='compans'>О компании</p>
        <ul className='company-p'>
          <li>О PlaceMik</li>
          <li>Новости</li>
          <li>Часто задаваемые вопросы</li>
          <li>Служба поддержки </li>
          <li>Сообщить о нарушении авторских прав</li>
        </ul>
      </div>
     </div>

      <div className="sub">
      <p className='news'>Хотите быть в курсе последних новостей и акций? </p>
      <input className='register-input' type="text" placeholder='konstantinkonstantinov@yandex.ru' />

      <button className='podpiska'><p>Подписаться</p></button>
      </div>


      <p className='social-network'>Мы в соцсетях</p>
      <img className='logo' src={Logo} alt=""/>

      <button className='wk'> <SlSocialVkontakte color='#fff'  fontSize={30} /> </button>
      <button className='Instagram'> <SlSocialInstagram color='#fff'  fontSize={25} /> </button>
      <button className='Facebook'> <TiSocialFacebook color='#fff'  fontSize={30} /> </button>

      <p className='PlaceMik'>© PlaceMik.ru, 2021</p>


    </div>
  )
}

export default Footer;
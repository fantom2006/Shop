import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./style.scss";
import Latpot from "../../assets/Laptop 1.png"
import Microvo from "../../assets/microwave 1.png"
import Soket from "../../assets/power-plug 1.png"
import Dress from "../../assets/dress 1.png"
import Shirt from "../../assets/t-shirt 1.png"
import Fire from "../../assets/fire.png"
import Premium from "../../assets/diamond 1.png"
import Acsia from "../../assets/discount (1) 1.png"
import Baner from "../../assets/baner1.png"

function Header() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuCliced, SetIsMenuClicked] = useState(false)
  
    const updateMenu = () => {
      if (!isMenuCliced) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
      }
      else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
      }
      SetIsMenuClicked(!isMenuCliced)
    }
    return (
      <div className='conteiner'>
        <div className='headrer'>
          <div className='russen'>
            <il>
              <ol>Покупателям
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5.00042 6.9007L0.714411 2.20828C0.55102 2.04448 0.285934 2.04448 0.122543 2.20828C-0.0408477 2.37209 -0.0408477 2.63801 0.122543 2.80182L4.68323 7.79517C4.77034 7.88269 4.88621 7.91979 4.99999 7.91396C5.1142 7.91979 5.22965 7.88269 5.31677 7.79517L9.87744 2.80182C10.0408 2.63801 10.0408 2.37209 9.87744 2.20828C9.71407 2.04448 9.44897 2.04448 9.28559 2.20828L5.00042 6.9007Z" fill="black" />
                </svg>
              </ol>
              <ol>Поставщикам
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5.00042 6.9007L0.714411 2.20828C0.55102 2.04448 0.285934 2.04448 0.122543 2.20828C-0.0408477 2.37209 -0.0408477 2.63801 0.122543 2.80182L4.68323 7.79517C4.77034 7.88269 4.88621 7.91979 4.99999 7.91396C5.1142 7.91979 5.22965 7.88269 5.31677 7.79517L9.87744 2.80182C10.0408 2.63801 10.0408 2.37209 9.87744 2.20828C9.71407 2.04448 9.44897 2.04448 9.28559 2.20828L5.00042 6.9007Z" fill="black" />
                </svg>
              </ol>
              <ol>Частые вопросы</ol>
            </il>
            <div className='ru_svg'>
              <svg className='rus_flag' xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 22 14" fill="none">
                <rect width="20" height="4" transform="matrix(-1 0 0 1 21 0.5)" fill="white" />
                <rect x="0.05" y="-0.05" width="20.1" height="4.1" transform="matrix(-1 0 0 1 21.1 0.5)" stroke="black" stroke-opacity="0.5" stroke-width="0.1" />
                <rect width="20" height="5" transform="matrix(-1 0 0 1 21 4.5)" fill="#0000FF" />
                <rect x="0.05" y="-0.05" width="20.1" height="5.1" transform="matrix(-1 0 0 1 21.1 4.5)" stroke="black" stroke-opacity="0.5" stroke-width="0.1" />
                <rect width="20" height="4" transform="matrix(-1 0 0 1 21 9.5)" fill="#FF0000" />
                <rect x="0.05" y="-0.05" width="20.1" height="4.1" transform="matrix(-1 0 0 1 21.1 9.5)" stroke="black" stroke-opacity="0.5" stroke-width="0.1" />
              </svg>
  
              <div className='line'></div>
              <p>Русский</p>
              <div className='line'></div>
              <p>₽</p>
              <svg className='niz' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5.00042 6.9007L0.714411 2.20828C0.55102 2.04448 0.285934 2.04448 0.122543 2.20828C-0.0408477 2.37209 -0.0408477 2.63801 0.122543 2.80182L4.68323 7.79517C4.77034 7.88269 4.88621 7.91979 4.99999 7.91396C5.1142 7.91979 5.22965 7.88269 5.31677 7.79517L9.87744 2.80182C10.0408 2.63801 10.0408 2.37209 9.87744 2.20828C9.71407 2.04448 9.44897 2.04448 9.28559 2.20828L5.00042 6.9007Z" fill="black" />
              </svg>
            </div>
          </div>
          <div className='header_input'>
            {/* <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class} ></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div> */}
            <div className={menu_class}>
              <div className="coto_ac">
                <div className="text_k">
                  <img src={Fire} alt="" />
                  <h4>Акции</h4>
                </div>
                <p>Компьютеры и оргтехника</p>
                <p>Электроника</p>
                <p>Бытовая техника</p>
                <p>Одежда для мужчин  </p>
                <p>Одежда для женщин</p>
                <div className="text_k_margin">
                  <img src={Premium} alt="" />
                  <h4>Premium</h4>
                </div>
                <div className="text_k">
                  <img src={Acsia} alt="" />
                  <h4>Уцененные товары</h4>
                </div>
              </div>
              <div className="ostsal_tovar">
                <div className="cotolog_tovar_burger">
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                  <div className="block_burger">
                    <p>Укладка волос</p>
                    <ui>
                      <li>Электрощипцы и плойки</li>
                      <li>Выпрямители Мультистайлеры</li>
                      <li>Электробигуди</li>
                      <li> Фены и фены-щётки</li>
                      <li> Термощётки</li>
                    </ui>
                  </div>
                </div>
                <img src={Baner} alt="" />
              </div>
            </div>
            <div className='burger' onClick={updateMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M28.5 25.5H1.5C0.67201 25.5 0 26.172 0 27C0 27.828 0.67201 28.5 1.5 28.5H28.5C29.328 28.5 30 27.828 30 26.9999C30 26.172 29.328 25.5 28.5 25.5ZM1.5 4.5H28.5C29.328 4.5 30 3.82804 30 3C30 2.17196 29.328 1.5 28.5 1.5H1.5C0.67201 1.50005 0 2.17201 0 3.00005C0 3.82804 0.67201 4.5 1.5 4.5ZM28.5 13.5H1.5C0.67201 13.5 0 14.172 0 15C0 15.8281 0.67201 16.5 1.5 16.5H28.5C29.328 16.5 30 15.828 30 15C30 14.1721 29.328 13.5 28.5 13.5Z" fill="white" />
              </svg>
            </div>
            <div className='made_in_k'>
              <img src={Logo} alt="" />
            </div>
            <div className="input_block">
              <div className="everywhere">
                <p>Везде</p>
              </div>
              <input type="text" />
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                <g clip-path="url(#clip0_111_11113)">
                  <path d="M26.4231 24.5855L19.5359 17.98C21.3395 16.0701 22.4476 13.5443 22.4476 10.7649C22.4467 4.81923 17.4223 0 11.2238 0C5.02532 0 0.000854492 4.81923 0.000854492 10.7649C0.000854492 16.7106 5.02532 21.5298 11.2238 21.5298C13.902 21.5298 16.3583 20.6269 18.2878 19.1258L25.2016 25.7574C25.5385 26.0809 26.0854 26.0809 26.4223 25.7574C26.76 25.434 26.76 24.909 26.4231 24.5855ZM11.2238 19.8735C5.97921 19.8735 1.72766 15.7955 1.72766 10.7649C1.72766 5.73431 5.97921 1.65624 11.2238 1.65624C16.4684 1.65624 20.7199 5.73431 20.7199 10.7649C20.7199 15.7955 16.4684 19.8735 11.2238 19.8735Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_111_11113">
                    <rect width="27" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="user">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M20.1998 7.28C20.1998 11.3006 16.9404 14.56 12.9198 14.56C8.89916 14.56 5.6398 11.3006 5.6398 7.28C5.6398 3.25937 8.89916 0 12.9198 0C16.9404 0 20.1998 3.25937 20.1998 7.28ZM7.387 7.28C7.387 10.3357 9.86411 12.8128 12.9198 12.8128C15.9755 12.8128 18.4526 10.3357 18.4526 7.28C18.4526 4.22432 15.9755 1.7472 12.9198 1.7472C9.86411 1.7472 7.387 4.22432 7.387 7.28Z" fill="black" />
                <path d="M23.84 26C23.84 24.566 23.5575 23.146 23.0088 21.8211C22.46 20.4962 21.6556 19.2924 20.6416 18.2784C19.6276 17.2644 18.4238 16.46 17.0989 15.9112C15.774 15.3625 14.354 15.08 12.92 15.08C11.486 15.08 10.066 15.3625 8.74109 15.9112C7.41622 16.46 6.21241 17.2644 5.19839 18.2784C4.18438 19.2924 3.38002 20.4962 2.83123 21.8211C2.28245 23.146 2 24.566 2 26H3.74395C3.74395 24.795 3.9813 23.6018 4.44243 22.4885C4.90357 21.3752 5.57948 20.3636 6.43155 19.5116C7.28363 18.6595 8.29519 17.9836 9.40848 17.5224C10.5218 17.0613 11.715 16.8239 12.92 16.8239C14.125 16.8239 15.3182 17.0613 16.4315 17.5224C17.5448 17.9836 18.5564 18.6595 19.4084 19.5116C20.2605 20.3636 20.9364 21.3752 21.3976 22.4885C21.8587 23.6018 22.096 24.795 22.096 26H23.84Z" fill="black" />
              </svg>
              <p>Войти</p>
            </div>
            <div className="heart">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                <path d="M7.62209 2.3022C10.0596 2.57301 12.0907 4.33343 13.9865 6.63554C15.8824 4.33343 18.0624 2.3022 20.7707 2.3022C24.2916 2.3022 25.8973 5.49676 25.4969 8.21286C25.0907 10.9689 24.0205 11.3751 19.2679 17.1981L14.6638 22.6147C13.7658 23.5713 14.2075 23.5713 13.3096 22.6147L11.6846 20.5835L10.3303 18.9584L8.84085 17.1981C3.84347 11.3751 2.68496 9.88554 2.48926 8.21286C2.08291 4.73972 4.38518 1.94257 7.62209 2.3022Z" fill="url(#paint0_linear_111_11223)" />
                <path d="M20.7709 0.258301C17.95 0.258301 15.8155 1.91379 14 3.64372C12.2701 1.80798 10.0501 0.258301 7.22921 0.258301C3.25641 0.258301 0.458374 3.67416 0.458374 7.39901C0.458374 9.39724 1.2768 10.8369 2.17308 12.1885L12.6958 24.8043C13.8773 26.0543 14.0999 26.0543 15.2814 24.8043L25.8278 12.1885C26.8815 10.8369 27.5417 9.39724 27.5417 7.39901C27.5417 3.67421 24.7436 0.258301 20.7709 0.258301ZM24.1563 11.8382L14 23.9562L3.84379 11.7882C2.62929 10.0997 2.15108 8.96055 2.15108 7.39901C2.15108 4.48923 4.22889 1.86976 7.22921 1.8452C9.6972 1.82489 12.4944 4.34532 14 6.2454C15.4659 4.41134 18.3029 1.8452 20.7709 1.8452C23.6916 1.8452 25.849 4.48923 25.849 7.39901C25.849 8.96055 25.4707 10.1843 24.1563 11.8382Z" fill="black" />
                <defs>
                  <linearGradient id="paint0_linear_111_11223" x1="-10.4145" y1="-12.3548" x2="29.8289" y2="-7.10721" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F64D4D" />
                    <stop offset="1" stop-color="#4D5EF6" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Избранное</p>
            </div>
            <div className="basket">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                <path d="M5.80859 5.41699H25.5253L23.4669 13.867L5.80859 15.3837V5.41699Z" fill="url(#paint0_linear_111_11229)" />
                <path d="M7.25 19.0667C6.31766 19.0667 5.5625 18.291 5.5625 17.3333L24.2475 15.6644C24.6789 15.6259 25.0381 15.3118 25.1415 14.8799C25.712 12.4953 27.5 4.97067 27.5 4.33333C27.5 3.85493 27.122 3.46667 26.6562 3.46667H5.5625V1.56C5.5625 0.866667 5.5625 1.34507 5.5625 0.866667C5.5625 0.388267 5.1845 0 4.71875 0L1.34375 3.09944e-07C0.878 3.09944e-07 0.5 0.388267 0.5 0.866667C0.5 1.34507 0.878 1.73333 1.34375 1.73333H3.875V17.3333C3.875 19.2478 5.38616 20.8 7.25 20.8L22.505 20.8C22.505 20.8 21.865 19.981 22.3586 20.54L22.505 20.8L20.75 19.24L7.25 19.0667ZM5.5625 5.2H25.8125L23.6551 14.0642L5.5625 15.6V5.2Z" fill="black" />
                <path d="M24.0406 22.62C24.0406 24.4867 22.5674 26 20.75 26C18.9326 26 17.4594 24.4867 17.4594 22.62C17.4594 20.7533 18.9326 19.24 20.75 19.24C22.5674 19.24 24.0406 20.7533 24.0406 22.62ZM19.1414 22.62C19.1414 23.5325 19.8616 24.2723 20.75 24.2723C21.6384 24.2723 22.3586 23.5325 22.3586 22.62C22.3586 21.7075 21.6384 20.9677 20.75 20.9677C19.8616 20.9677 19.1414 21.7075 19.1414 22.62Z" fill="black" />
                <path d="M12.1438 22.62C12.1438 24.4867 10.6705 26 8.85313 26C7.03577 26 5.5625 24.4867 5.5625 22.62C5.5625 20.7533 7.03577 19.24 8.85313 19.24C10.6705 19.24 12.1438 20.7533 12.1438 22.62ZM7.24454 22.62C7.24454 23.5325 7.96473 24.2723 8.85313 24.2723C9.74153 24.2723 10.4617 23.5325 10.4617 22.62C10.4617 21.7075 9.74153 20.9677 8.85313 20.9677C7.96473 20.9677 7.24454 21.7075 7.24454 22.62Z" fill="black" />
                <defs>
                  <linearGradient id="paint0_linear_111_11229" x1="-5.1588" y1="-1.50431" x2="27.9252" y2="6.27193" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F64D4D" />
                    <stop offset="1" stop-color="#4D5EF6" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Корзина</p>
            </div>
          </div>
        </div>
        {/* fgkjfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnb */}
        <div className="cotolog-claid">
          <div className="cotolog">
            <div className="cot">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_111_10134)">
                  <path d="M11.7678 0.73223C12.7441 1.70854 12.7441 3.29145 11.7678 4.26776C10.7915 5.24407 9.20854 5.24407 8.23223 4.26776C7.25592 3.29145 7.25592 1.70854 8.23223 0.73223C9.2085 -0.244077 10.7914 -0.244077 11.7678 0.73223Z" fill="white" />
                  <path d="M11.7678 8.23223C12.7441 9.20854 12.7441 10.7915 11.7678 11.7678C10.7915 12.7441 9.20854 12.7441 8.23223 11.7678C7.25592 10.7915 7.25592 9.20854 8.23223 8.23223C9.2085 7.25592 10.7914 7.25592 11.7678 8.23223Z" fill="white" />
                  <path d="M11.7678 15.7322C12.7441 16.7085 12.7441 18.2915 11.7678 19.2678C10.7915 20.2441 9.20854 20.2441 8.23223 19.2678C7.25592 18.2915 7.25592 16.7085 8.23223 15.7322C9.2085 14.7559 10.7914 14.7559 11.7678 15.7322Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_111_10134">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4>
                Популярные категории
              </h4>
            </div>
            <div className="cotol_tov">
              <div className="coto_t_mini">
                <img src={Latpot} alt="" />
                <p>Компьютеры и оргтехника</p>
              </div>
              <div className="coto_t_mini">
                <img src={Soket} alt="" />
                <p>Электроника</p>
              </div>
              <div className="coto_t_mini">
                <img src={Microvo} alt="" />
                <p>Бытовая техника</p>
              </div>
              <div className="coto_t_mini">
                <img src={Dress} alt="" />
                <p>Одежда для женщин</p>
              </div>
              <div className="coto_t_mini">
                <img src={Shirt} alt="" />
                <p>Одежда для мужчин</p>
              </div>
            </div>
          </div>
          <div className="slaid">
            <div className="crug">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_111_19952)">
                  <path d="M5.5822 9.00054L13.4029 1.85719C13.6759 1.58487 13.6759 1.14306 13.4029 0.870742C13.1299 0.598424 12.6867 0.598424 12.4137 0.870742L4.09142 8.47188C3.94553 8.61707 3.88371 8.81019 3.89343 8.99983C3.88371 9.19018 3.94553 9.38259 4.09142 9.52779L12.4137 17.1289C12.6867 17.4012 13.1299 17.4012 13.4029 17.1289C13.6759 16.8566 13.6759 16.4148 13.4029 16.1425L5.5822 9.00054Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_111_19952">
                    <rect width="16.6667" height="16.6667" fill="white" transform="translate(0.416664 0.666504)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="crug1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_111_19941)">
                  <path d="M11.9178 8.99946L4.0971 16.1428C3.82409 16.4151 3.82409 16.8569 4.0971 17.1293C4.37011 17.4016 4.81331 17.4016 5.08632 17.1293L13.4086 9.52812C13.5545 9.38293 13.6163 9.18981 13.6066 9.00017C13.6163 8.80982 13.5545 8.61741 13.4086 8.47221L5.08632 0.87109C4.81331 0.598772 4.37011 0.598772 4.0971 0.87109C3.82409 1.14339 3.82409 1.58522 4.0971 1.85752L11.9178 8.99946Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_111_19941">
                    <rect width="16.6667" height="16.6667" fill="white" transform="matrix(-1 0 0 -1 17.0833 17.3335)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        {/* <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class} ></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>
        <div className={menu_class}>
          jhgfghdxfgzxd
        </div> */}
      </div>
  
    )
}

export default Header

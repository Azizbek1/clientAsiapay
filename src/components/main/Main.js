import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules

import imgCart_1 from "../../images/2mask.svg";
import imgCart_2 from "../../images/2.png";
import imgCart_3 from "../../images/3.png";
import imgCart_4 from "../../images/4.png";
import imgCart_5 from "../../images/5.png";
import pay1 from "../../images/pay1.png";
import pay2 from "../../images/pay2.png";
import pay3 from "../../images/pay3.png";
import pay4 from "../../images/pay4.png";
import pay5 from "../../images/pay5.png";
import pay6 from "../../images/pay6.png";
import abouyt from "../../images/aboyt.png";
import anorbank from "../../images/anorbank.png";
import mikro from "../../images/mikro-credits.png";
import qqb from "../../images/qqb-credits_2.png";
import sqb_credits from "../../images/sqb_credits.png";
import asaka from "../../images/asaka.png";
import ipoteka from "../../images/ipoteka-credits.png";

import "./main.scss";

const Main = () => {
  SwiperCore.use([Autoplay]);
  return (
    <main className="main">
      <div className="container-fluid main__bg">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="main__slider-cart">
              <img src={abouyt} alt="png" />
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, sed a? Modi rerum atque molestias!
              </p>
              <button>lorem</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="main__slider-cart">
              <img src={abouyt} alt="png" />
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, sed a? Modi rerum atque molestias!
              </p>
              <button>lorem</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="main__slider-cart">
              <img src={abouyt} alt="png" />
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, sed a? Modi rerum atque molestias!
              </p>
              <button>lorem</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="main__slider-cart">
              <img src={abouyt} alt="png" />
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, sed a? Modi rerum atque molestias!
              </p>
              <button>lorem</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main__title">Почему стоит доверять именно нам?</div>
        <div className="row">
          <div className="col-md-4">
            <div className="main__card">
              <img src={imgCart_1} alt="png" />
              <h4>Фиксированная комиссия</h4>
              <p>
                Существуем уже более 4 лет в цифровом мире быстрых переводов и
                оплат в различные структуры. Сотрудничаем с более 35+ банками.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main__card">
              <img src={imgCart_1} alt="png" />
              <h4>Легко, Быстро и Стабильно</h4>
              <p>
                Только у нас работает круглосуточная поддержка пользователя в
                режиме 24/7.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main__card">
              <img src={imgCart_1} alt="png" />
              <h4>100% Безопасность</h4>
              <p>
                И мы гарантируем вам 100% безопасность транзакции. Переводите
                деньги так, как вам удобно - на банковские карты и счета, или
                просто по номеру мобильного телефона.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="main__info">
              <img src={imgCart_2} alt="png" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="main__info main__info-right">
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                fuga facere? A maiores debitis nam omnis, sint incidunt pariatur
                laboriosam nostrum voluptate excepturi nihil distinctio et
                praesentium labore, quos tempora?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                dolore harum optio maxime rem aliquam ad labore corporis facere.
                Id.
              </p>
              <a className="btn btn-danger" href="javascriptvoid()">
                Lorem, ipsum dolor.
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="main__busines">
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                beatae nam culpa dolore consectetur explicabo!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                vel possimus adipisci ipsum aut temporibus debitis totam fuga
                dolorem nemo.
              </p>
              <ul>
                <li>
                  <img src={imgCart_4} alt="png" />
                  <span>Lorem, ipsum.</span>
                </li>
                <li>
                  <img src={imgCart_4} alt="png" />
                  <span>Lorem, ipsum.</span>
                </li>
                <li>
                  <img src={imgCart_4} alt="png" />
                  <span>Lorem, ipsum.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main__busines-right">
              <img src={imgCart_3} alt="png" />
            </div>
          </div>
        </div>
      </div>
      <div className="main__swiper">
        <div className="container-fluid main__swiper-fluid">
          <div className="">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="main__swiper-card">
                  <img src={pay1} alt="png" />
                  <h4>Lorem, ipsum.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo reprehenderit libero amet minus ullam a.
                  </p>
                  <a className="btn btn-success" href="javascriptvoid()">
                    Lorem, ipsum.
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__swiper-card">
                  <img src={pay2} alt="png" />
                  <h4>Lorem, ipsum.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo reprehenderit libero amet minus ullam a.
                  </p>
                  <a className="btn btn-success" href="javascriptvoid()">
                    Lorem, ipsum.
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__swiper-card">
                  <img src={pay3} alt="png" />
                  <h4>Lorem, ipsum.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo reprehenderit libero amet minus ullam a.
                  </p>
                  <a className="btn btn-success" href="javascriptvoid()">
                    Lorem, ipsum.
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__swiper-card">
                  <img src={pay4} alt="png" />
                  <h4>Lorem, ipsum.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo reprehenderit libero amet minus ullam a.
                  </p>
                  <a className="btn btn-success" href="javascriptvoid()">
                    Lorem, ipsum.
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__swiper-card">
                  <img src={pay5} alt="png" />
                  <h4>Lorem, ipsum.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo reprehenderit libero amet minus ullam a.
                  </p>
                  <a className="btn btn-success" href="javascriptvoid()">
                    Lorem, ipsum.
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__swiper-card">
                  <img src={pay6} alt="png" />
                  <h4>Lorem, ipsum.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo reprehenderit libero amet minus ullam a.
                  </p>
                  <a className="btn btn-success" href="javascriptvoid()">
                    Lorem, ipsum.
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="main__news news">
        <div className="container">
          <div className="row ">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem aut ratione doloribus et, eligendi debitis.
            </p>

            <div className="col-md-3">
              <div className="news__card">
                <img src={imgCart_5} alt="png" />
                <h4>Lorem, ipsum.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis deserunt ratione ipsum explicabo magni quos.
                </p>
                <a className="btn btn-success" href="javascriptvoid()">
                  Lorem, ipsum.
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="news__card">
                <img src={imgCart_5} alt="png" />
                <h4>Lorem, ipsum.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis deserunt ratione ipsum explicabo magni quos.
                </p>
                <a className="btn btn-success" href="javascriptvoid()">
                  Lorem, ipsum.
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="news__card">
                <img src={imgCart_5} alt="png" />
                <h4>Lorem, ipsum.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis deserunt ratione ipsum explicabo magni quos.
                </p>
                <a className="btn btn-success" href="javascriptvoid()">
                  Lorem, ipsum.
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="news__card">
                <img src={imgCart_5} alt="png" />
                <h4>Lorem, ipsum.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis deserunt ratione ipsum explicabo magni quos.
                </p>
                <a className="btn btn-success" href="javascriptvoid()">
                  Lorem, ipsum.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <div className="container">
          <h2>Lorem, ipsum.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="row">
            <div className="col-md-2 col-6">
              <div className="sponsors__card">
                <a href="javascriptvoid()">
                  <img src={anorbank} alt="png" />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="sponsors__card">
                <a href="javascriptvoid()">
                  <img src={mikro} alt="png" />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="sponsors__card">
                <a href="javascriptvoid()">
                  <img src={qqb} alt="png" />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="sponsors__card">
                <a href="javascriptvoid()">
                  <img src={sqb_credits} alt="png" />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="sponsors__card">
                <a href="javascriptvoid()">
                  <img src={asaka} alt="png" />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="sponsors__card">
                <a href="javascriptvoid()">
                  <img src={ipoteka} alt="png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

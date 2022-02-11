import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Images

import header_1 from '../../images/Header.jpg'
import header_2 from '../../images/header2.jpg'
import header_3 from '../../images/header3.jpg'


// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="mySwiper__card">
                        <img className="mySwiper__card-img" src={header_1} alt="jpg" />
                        <div className="mySwiper__card-text">
                            <h3>  Легко отправить<br />   Легко получить</h3>
                            <p>Быстрый, Круглосуточный, Безопасный <br/> и Выгодный сервис денежных переводов,который <br/> позволяет вам отправлять денежные средства в СНГ стран.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mySwiper__card">
                        <img className="mySwiper__card-img" src={header_1} alt="jpg" />
                        <div className="mySwiper__card-text">
                        <h3>  Легко отправить<br />   Легко получить</h3>
                            <p>Быстрый, Круглосуточный, Безопасный <br/> и Выгодный сервис денежных переводов,который <br/> позволяет вам отправлять денежные средства в СНГ стран.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mySwiper__card">
                        <img className="mySwiper__card-img" src={header_1} alt="jpg" />
                        <div className="mySwiper__card-text">
                        <h3>  Легко отправить<br />   Легко получить</h3>
                            <p>Быстрый, Круглосуточный, Безопасный <br/> и Выгодный сервис денежных переводов,который <br/> позволяет вам отправлять денежные средства в СНГ стран.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSliderList } from '../../actions';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Images
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination } from 'swiper';

const Slider = (props) => {

  useEffect(() => {
    props.getSliderList();
  }, []);


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

        {
          props.list && props.list.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="mySwiper__card">
                  <img className="mySwiper__card-img" src={`http://localhost:5000/${item.image_path}`} alt="jpg" />
                  <div className="mySwiper__card-text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })

        }


      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.sliderList,
  };
};

export default connect(mapStateToProps, { getSliderList })(Slider);

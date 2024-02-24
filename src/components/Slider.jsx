//import sliders swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import sliders from "../staticData/slides";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-wrapper container">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, FreeMode, Autoplay]}
          className="mySwiper"
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
          }}
        >
          {sliders?.map((slider) => (
            <SwiperSlide key={slider?.id}>
              <img
                className="slider-img"
                // style={{ height: "10", width: "30" }}
                src={slider?.image}
                alt={slider?.id}
              />
              {/* <h3>{slider?.discription}</h3> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

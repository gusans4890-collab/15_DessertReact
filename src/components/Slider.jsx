import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../data/slider";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = () => {
    return (
        <section id="sliderType">
            <Swiper
                className="slider_wrap mySwiper"
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
                {sliderData.map((slider, idx) => (
                    <SwiperSlide className={`slide${idx + 1}`} key={slider.id}>
                        <img src={slider.img} alt={`디저트 이미지${idx + 1}`} />
                        <div className="container">
                            <div className="slider_inner">
                                <span>{slider.subtitle}</span>
                                <h1>{slider.title}</h1>
                                <p style={{ whiteSpace: "pre-line" }}>{slider.desc}</p>
                                <div className="slider_button">
                                    <a href="/">자세히 보기</a>
                                    <a href="/">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;

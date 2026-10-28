const Slider = () => {
    return (
        <section id="sliderType">
            <div className="slider_wrap swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1">
                        <img src="assets/img/slider1.jpg" alt="디저트 이미지1" />

                        <div className="container">
                            <div className="slider_inner">
                                <span>DESSERT CAFE</span>
                                <h1>DESSERT TRENDS</h1>
                                <p>
                                    카페와 어울리는 세상의 모든 디저트를 만나보세요!
                                    <br />
                                    공간의 분위기를 매력적으로 전환시켜 줄거예요!
                                </p>
                                <div className="slider_button">
                                    <a href="#">자세히 보기</a>
                                    <a href="#">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide slide2">
                        <img src="assets/img/slider2.jpg" alt="디저트 이미지2" />

                        <div className="container">
                            <div className="slider_inner">
                                <span>DESSERT CAFE</span>
                                <h1>SWEET DESSERT</h1>
                                <p>
                                    취향을 담은 다양한 디저트와 함께
                                    <br />
                                    평범한 하루를 특별하게 만들어 보세요.
                                </p>
                                <div className="slider_button">
                                    <a href="/">자세히 보기</a>
                                    <a href="/">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide slide3">
                        <img src="assets/img/slider3.jpg" alt="디저트 이미지3" />

                        <div className="container">
                            <div className="slider_inner">
                                <span>DESSERT CAFE</span>
                                <h1>FRESHLY BAKED</h1>
                                <p>
                                    좋은 재료와 정성으로 완성한 베이커리 바삭한 식감과
                                    <br />
                                    부드러운 속까지한 입에 담긴 특별한 맛을 경험해 보세요.
                                </p>
                                <div className="slider_button">
                                    <a href="/">자세히 보기</a>
                                    <a href="/">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Slider;

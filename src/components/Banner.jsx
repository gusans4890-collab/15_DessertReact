const Banner = ({ title }) => {
    return (
        <section id="bannerType" className="main_banner">
            <div className="banner_text">
                <h1>{title}</h1>
                <p>매일 아침, 정성으로 완성하는 따뜻한 한 조각</p>
            </div>
        </section>
    );
};

export default Banner;



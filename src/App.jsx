import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import Image from "./components/Image.jsx";
import ImageText from "./components/ImageText.jsx";
import Card from "./components/Card.jsx";
import Banner from "./components/Banner.jsx";
import Text from "./components/Text.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, offset: 120 });
        const refresh = () => AOS.refreshHard();
        const frame = requestAnimationFrame(refresh);
        window.addEventListener("load", refresh);
        document.addEventListener("load", refresh, true);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("load", refresh);
            document.removeEventListener("load", refresh, true);
        };
    }, []);
    return (
        <>
            <Header />
            <Slider />
            <Image title="프리미엄 케이크와 디저트를 만나보세요" />
            <ImageText title={"디저트 사이트\n살펴보기"} />
            <Card title="카페, 그 이상의 문화를 만들다" />
            <Banner title="일상 속 작은 특별함을 굽다" />
            <Text title="다채로운 베이커리 컬렉션" />
            <Footer title="푸터영역" />
        </>
    );
};

export default App;



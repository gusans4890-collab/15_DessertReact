import { useEffect, useRef } from "react";
import { imageData } from "../data/imageData";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Image = ({ title }) => {
    const imageRef = useRef([]);
    const imageInner = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: imageInner.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        }, imageInner);

        return () => ctx.revert();
    }, []);

    return (
        <section id="imageType">
            <h1 className="blind">이미지 유형 만들기</h1>

            <div className="container">
                <div className="imageType_title">
                    <h2>{title}</h2>
                    <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
                </div>

                <div className="imageType_wrap" ref={imageInner}>
                    {imageData.map((image, index) => (
                        <div
                            className={`imageType_img0${index + 1}`}
                            style={{ backgroundImage: `url(${image.img})` }}
                            key={image.id}
                            ref={(el) => {
                                imageRef.current[index] = el;
                            }}
                        >
                            <div className="imageType_txt">
                                <h3>{image.title}</h3>
                                <p>{image.desc}</p>
                                <a href="#">자세히 보기</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Image;


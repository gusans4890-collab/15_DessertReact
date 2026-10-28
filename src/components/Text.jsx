import { textData } from "../data/textData";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Text = ({ title }) => {
    const textInner = useRef(null);
    const textRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: textInner.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        }, textInner);

        return () => ctx.revert();
    }, []);
    return (
        <section id="textType" className="section">
            <span>오늘의 달콤한 추천</span>
            <h2>{title}</h2>

            <div className="container text_inner" ref={textInner}>
                {textData.map((text, idx) => (
                    <div
                        className={`txt t${idx + 1}`}
                        key={text.id}
                        ref={(el) => {
                            textRef.current[idx] = el;
                        }}
                    >
                        <div className="text_icon"></div>
                        <div className="text_title">{text.title}</div>
                        <div className="text_desc">{text.desc}</div>
                        <a href="/" className="text_btn">
                            더보기
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Text;



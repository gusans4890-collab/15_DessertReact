import { card } from "../data/card";

const Card = ({ title }) => {
    return (
        <section id="cardType" className="section">
            <h2>{title}</h2>
            <p>
                투썸플레이스는 프리미엄 커피 & 디저트 카페의 리딩 브랜드로서 <br />
                디저트 카페 문화의 차별화된 제품과 서비스를 선보일 것입니다.
            </p>
            <div className="container card_inner">
                {card.map((item, idx) => (
                    <div className="card" key={item.id} data-aos="fade-up" data-aos-delay={idx * 150}>
                        <figure>
                            <img src={item.img} alt={item.tit} />
                        </figure>
                        <div className="card_body">
                            <div className="tit">{item.tit}</div>
                            <div className="desc">{item.desc}</div>
                            <a href="#" className="btn">
                                더 자세히 보기
                                <span>
                                    <svg
                                        width="37"
                                        height="9"
                                        viewBox="0 0 37 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 4.37378H36" stroke="black" />
                                        <path d="M31.5 0.373779L36 4.37378L31.5 8.37378" stroke="black" />
                                    </svg>{" "}
                                </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;


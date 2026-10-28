import { imageData } from "../data/imageData";

const Image = () => {
    return (
        <section id="imageType">
            <h1 className="blind">이미지 유형 만들기</h1>

            <div className="container">
                <div className="imageType_title">
                    <h2>프리미엄 케이크와 디저트를 만나보세요</h2>
                    <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
                </div>

                <div className="imageType_wrap">
                    {imageData.map((image, index) => (
                        <div
                            className={`imageType_img0${index + 1}`}
                            style={{ backgroundImage: `url(${image.img})` }}
                            key={image.id}
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

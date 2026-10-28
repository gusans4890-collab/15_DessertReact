import { imageTextData } from "../data/imageTextData";

const ImageText = ({ title }) => {
    return (
        <section id="imageTextType">
            <h1 className="blind">{imageTextData.heading}</h1>
            <div className="container">
                <div className="imageTextType_txt" data-aos="fade-right" data-aos-duration="1000">
                    <div className="small">{imageTextData.small}</div>
                    <div className="title" style={{ whiteSpace: "pre-line" }}>
                        {title}
                    </div>
                    <div className="desc" style={{ whiteSpace: "pre-line" }}>
                        {imageTextData.desc}
                    </div>
                    <ul className="list">
                        {imageTextData.links.map((item) => (
                            <li key={item.id}>
                                <a href={item.link}>• {item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {imageTextData.images.map((item, idx) => (
                    <div
                        className={`imageTextType_img${item.id}`}
                        key={item.id}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay={(idx + 1) * 150}
                    >
                        <img src={item.img} alt={item.text} />
                        <a href={item.link}>{item.text}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageText;






import { imageTextData } from "../data/imageTextData";

const ImageText = () => {
    return (
        <section id="imageTextType">
            <h1 className="blind">{imageTextData.heading}</h1>
            <div className="container">
                <div className="imageTextType_txt">
                    <div className="small">{imageTextData.small}</div>
                    <div className="title" style={{ whiteSpace: "pre-line" }}>
                        {imageTextData.title}
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
                {imageTextData.images.map((item) => (
                    <div className={`imageTextType_img${item.id}`} key={item.id}>
                        <img src={item.img} alt={item.text} />
                        <a href={item.link}>{item.text}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageText;


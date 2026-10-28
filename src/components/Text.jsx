import { textData } from "../data/textData";

const Text = () => {
    return (
        <section id="textType" className="section">
            <span>오늘의 달콤한 추천</span>
            <h2>다채로운 베이커리 컬렉션</h2>

            <div className="container text_inner">
                {textData.map((text, idx) => (
                    <div className={`txt t${idx + 1}`} key={text.id}>
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

import { footerData } from "../data/footerData";

const Footer = ({ title }) => {
    return (
        <section id="footer" className="section">
            <h2 className="blind">{title}</h2>

            <div className="footer_inner">
                {footerData.map((footer, idx) => (
                    <div key={idx}>
                        <h2>{footer.title}</h2>
                        <ul>
                            {footer.links.map((link, i) => (
                                <li key={i}>
                                    <a href="/">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer_copy">
                <p>
                    2026 A TWOSOME PLACE Co., LTD.
                    <br />
                    All Rights Reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;



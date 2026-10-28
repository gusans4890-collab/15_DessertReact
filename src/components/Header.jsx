import link from "../utils/link";
import { memberData, menuData } from "../data/headerData";

const Header = ({ title }) => {
    return (
        <header id="header">
            <div className="header_inner">
                <div className="header_logo">
                    <a href="#">
                        Dessert<em>site</em>
                    </a>
                </div>
                <nav className="header_nav">
                    <ul>
                        {menuData.map((menu) => (
                            <li key={menu.title}>
                                <a href={menu.link} onClick={link}>
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header_member">
                    {memberData.map((mem, index) => (
                        <a href="/" key={index}>
                            {mem}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;

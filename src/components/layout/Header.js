import logo from "../../img/icons_assets/Logo.svg"
import {Link} from "react-router-dom";
import "./Layout.css"
function Header() {
    return (
        <header>
            <Link to={"/meta-capstone-project/"}><img alt={"logo"} src={logo}/></Link>
            <nav>
                <ul>
                    <li>
                        <Link to={"/meta-capstone-project/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/meta-capstone-project/menu"}>Menu</Link>
                    </li>
                    <li>
                        <Link to={"/meta-capstone-project/booking"}>Reservations</Link>
                    </li>
                    <li>
                        <Link to={"/meta-capstone-project/order"}>Order Online</Link>
                    </li>
                    <li>
                        <Link to={"/meta-capstone-project/login"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
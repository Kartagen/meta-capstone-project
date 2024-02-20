import logo from "../../img/icons_assets/Logo.svg"
import {Link} from "react-router-dom";
import "./Layout.css"
function Header() {
    return (
        <header>
            <Link to={"/"}><img alt={"logo"} src={logo}/></Link>
            <nav>
                <ul>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/menu"}>Menu</Link>
                    </li>
                    <li>
                        <Link to={"/booking"}>Reservations</Link>
                    </li>
                    <li>
                        <Link to={"/order"}>Order Online</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
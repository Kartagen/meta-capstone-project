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
                        <Link to={"/"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Menu</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Reservations</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Order Online</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
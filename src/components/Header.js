import logo from "../img/icons_assets/Logo.svg"
function Header() {
    return (
        <>
            <a><img alt={"logo"} src={logo}/></a>
            <nav>
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                    <li>
                        <a>Reservations</a>
                    </li>
                    <li>
                        <a>Order Online</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
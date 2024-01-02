import { Link,NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import "./Header.css";

export const Header = ({data}) => {
  return (
    <header>
        <Link to="/" className="logo">
            <img src={Logo} alt="ShopUI LOGO" />
            <span>ShopUI</span>
        </Link>
        <nav className="navigation">
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className="items">
            <span>Cart: {data.length}</span>
        </Link>
    </header>
  )
}

import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri";

import logosvg from "./Assets/Svg/default-monochrome-white.svg";
import "./Components/Styles/Root.css";
import img from "./Assets/Images/profile.png";

const Root = () => {
  return (
    <div className="root">
      <header>
        <div className="logoNav">
          <div className="ham">
            <GiHamburgerMenu style={{ height: 30, width: 30 }} />{" "}
          </div>

          <div>
            <img src={logosvg} alt="" style={{ height: 100, width: 100 }} />
          </div>
        </div>
        <div className="topSide">
          <div className="cart">
            <RiShoppingCartFill style={{ height: 35, width: 35 }} />
            Cart
          </div>
          <img src={img} alt="" />
        </div>
      </header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Root;

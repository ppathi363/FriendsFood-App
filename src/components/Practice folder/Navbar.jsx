import React from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/abc">
          <li>
            <FirstComponent />
          </li>
        </Link>
        <Link to="/def">
          <li>
            <SecondComponent />
          </li>
        </Link>
        <Link to="/ghi">
          <li>
            <ThirdComponent />
          </li>
        </Link>
        <Link to="jkl">
          <li>
            <FourthComponent />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-conetent">
        <h2>Order your favourate food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingrediants and culinary exprtise. Our mission
          is to satisfy your carvings and elevate your dining experience, one
          delicious meal at time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

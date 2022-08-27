import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className={true ? "header root" : "header etc"}>
      <div className="box" onMouseEnter={handleMenu} onMouseLeave={handleMenu}>
        <Link to="/">NYEOK</Link>
        <div className={isOpenMenu ? "menu open" : "menu"}>
          <p>Dev</p>
          <p>Life</p>
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

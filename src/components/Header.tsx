import React from "react";

import Logo from "assets/imgs/logo.png";
import LogoGod from "assets/imgs/logo-god.png";

interface HeaderProps {}

const buttonStyle = {
  color: "#fff",
  borderRadius: "8px",
  padding: "0 17px",
  border: "1px solid #707070",
  backgroundImage:
    "linear-gradient(to top , rgba(75, 75, 75, 0.655) , rgba(177, 176, 176, 0.178))",
  fontWeight: 500
};

const headerImgStyle = {
  marginTop: "-2px"
};

const Header: React.FC<HeaderProps> = () => {
  const pathname = window.location.pathname;

  return (
    <div className="header-container ">
      <div className="flex flex-wrap bg-black w-full p-2 pr-4">
        <div className="w-auto pt-2 md:w-1/3">
          <img src={Logo} alt="logo" width={54} />
        </div>
        <div className="text-center pt-1 md:w-1/3">
          <img className="inline" src={LogoGod} width={62} alt="logo-god" />
          <span className="text-white text-22 lg:text-28 tracking-wide">
            BMVerse.io
          </span>
        </div>
        <div className="text-right pt-3 w-full md:w-1/3 text-18 md:text-22">
          <button style={buttonStyle}>Connect Wallet</button>
        </div>
      </div>
      <div style={headerImgStyle}>
        <img
          className="object-cover"
          src={require(`assets/imgs${pathname}-header.png`)}
          alt="headerimage"
        />
      </div>
    </div>
  );
};

export default Header;

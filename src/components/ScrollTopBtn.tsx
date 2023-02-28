import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

interface ScrollTopBtnProps {}

const buttonStyle = {
  position: "fixed" as "fixed",
  width: "50px",
  right: "40px",
  bottom: "60px",
  height: "60px",
  fontSize: "3rem",
  zIndex: 1,
  cursor: "pointer",
  color: "rgba(255,255,255,0.7)"
};

const ScrollTopBtn: React.FC<ScrollTopBtnProps> = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div style={buttonStyle}>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollTopBtn;

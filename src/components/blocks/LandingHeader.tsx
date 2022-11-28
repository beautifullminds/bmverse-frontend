import React from "react";

interface LandingHeaderProps {}

const headerImgStyle = {
  marginTop: "-2px"
};

const LandingHeader: React.FC<LandingHeaderProps> = () => {
  const pathname = window.location.pathname;

  return (
    <div style={headerImgStyle}>
      <img
        className="object-cover"
        src={require(`assets/imgs${pathname}-header.png`)}
        alt="headerimage"
      />
    </div>
  );
};

export default LandingHeader;

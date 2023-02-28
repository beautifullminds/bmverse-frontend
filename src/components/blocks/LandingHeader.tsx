import React from "react";

interface LandingHeaderProps {}

const headerImgStyle = {
  marginTop: "-2px"
};

const LandingHeader: React.FC<LandingHeaderProps> = () => {
  const pathname = window.location.href;
  const pagename = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <>
      {pagename !== "bmllabs" && (
        <div style={headerImgStyle}>
          <img
            className="object-cover"
            src={require(`assets/imgs/header/${pagename}-header.png`)}
            alt="headerimage"
          />
        </div>
      )}
    </>
  );
};

export default LandingHeader;

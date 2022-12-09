import React, { useEffect, useState } from "react";

interface CollaborateProps {
  scroll: number;
}

const CollaborateStyle = {
  padding: "20px",
  background: "rgba(16, 16, 16, 0.2)",
  borderRadius: "15px"
};

const radioStyle = {
  border: "0px",
  transform: "scale(2)",
  marginRight: "0.7rem"
};

const submitBtnStyle = {
  transform: "scaleY(-1)",
  zIndex: 9
};

const scrollHeightArr: { path: string; height: number }[] = [
  { path: "/bmgame", height: 2400 },
  { path: "/bmgalaxy", height: 5100 },
  { path: "/bmcard", height: 1850 },
  { path: "/bmmusic", height: 1800 },
  { path: "/bmmega", height: 5200 },
  { path: "/bmjewel", height: 3300 },
  { path: "/bmlearn", height: 4470 }
];

const Collaborate: React.FC<CollaborateProps> = ({ scroll }) => {
  const [sh, setSh] = useState(0);

  useEffect(() => {
    const pathname = window.location.pathname;
    const fH = scrollHeightArr.find(
      (item: { path: string; height: number }) => item.path === pathname
    );
    if (fH) {
      setSh(fH.height);
    }
  }, []);

  return (
    <div style={CollaborateStyle}>
      <h3
        className={`text-43 md:text-73 font-bold mb-[50px] border-y border-t-0 inline-block px-[50px] lg:left-[-1200px] relative ${
          sh > 0 && scroll > sh ? "transition-origin" : ""
        }`}
      >
        Collaborate
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 text-left mb-5 pl-4">
            <div>
              <input type="radio" style={radioStyle} name="collaborater" /> 
              <label className="text-21 font-semibold">Founder</label>
            </div>
            <div>
              <input type="radio" style={radioStyle} name="collaborater" /> 
              <label className="text-21 font-semibold">Developer</label>
            </div>
            <div>
              <input type="radio" style={radioStyle} name="collaborater" /> 
              <label className="text-21 font-semibold">Community</label>
            </div>
          </div>
          <div>
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Name"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Sure name"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Ens or eMail"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Conversance"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Innate talent"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Demand type"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Linkedin - Twitter"
            />
            <input
              className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
              placeholder="Github - Discord"
            />
          </div>
        </div>
        <div className="relative pt-[30px]">
          <div className="hex py-4">
            <textarea
              rows={15}
              className="bg-transparent w-full outline-none relative z-99 font-semibold h-[177px] md:h-[360px]"
              placeholder="What is the fiction about?"
            />
          </div>
          <div className="absolute h-[68px] overflow-hidden w-full m-auto submit-btn">
            <div className="hex text-black" style={{ background: "#fff" }}>
              <button
                className="text-43 text-black font-bold w-full relative"
                style={submitBtnStyle}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;

import React, { useEffect, useState } from "react";

interface BMblogProps {
  scroll: number;
}

const BMblogStyle = {
  padding: "20px",
  background: "rgba(16, 16, 16, 0.2)",
  borderRadius: "15px"
};

const blogItemStyle = {
  borderRadius: "15px",
  background: "#fff",
  minHeight: "400px"
};

const scrollHeightArr: { path: string; height: number }[] = [
  { path: "/bmgame", height: 1800 },
  { path: "/bmgalaxy", height: 4500 },
  { path: "/bmcard", height: 2600 },
  { path: "/bmmusic", height: 2600 },
  { path: "/bmmega", height: 4600 },
  { path: "/bmjewel", height: 2700 }
];

const BMblog: React.FC<BMblogProps> = ({ scroll }) => {
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
    <div style={BMblogStyle}>
      <h3
        className={`text-73 font-bold mb-5 lg:left-[-1000px] relative ${
          sh > 0 && scroll > sh ? "transition-origin" : ""
        }`}
      >
        BM Blog
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div style={blogItemStyle}></div>
        <div style={blogItemStyle}></div>
        <div style={blogItemStyle}></div>
        <div style={blogItemStyle}></div>
      </div>
    </div>
  );
};

export default BMblog;

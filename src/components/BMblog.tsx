import React from "react";

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

const BMblog: React.FC<BMblogProps> = ({ scroll }) => {
  return (
    <div style={BMblogStyle}>
      <h3
        className={`text-73 font-bold mb-5 lg:left-[-1000px] relative ${
          scroll > 1800 ? "transition-origin" : ""
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

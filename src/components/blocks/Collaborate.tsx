import React from "react";
import { useNavigate } from "react-router-dom";
// import { AnimationOnScroll } from "react-animation-on-scroll";

interface CollaborateProps {}

// const CollaborateStyle = {
//   padding: "20px",
//   background: "rgba(16, 16, 16, 0.2)",
//   borderRadius: "15px"
// };

// const radioStyle = {
//   border: "0px",
//   transform: "scale(2)",
//   marginRight: "0.7rem"
// };

// const submitBtnStyle = {
//   transform: "scaleY(-1)",
//   zIndex: 9
// };

const buttonStyle = {
  color: "#fff",
  borderRadius: "8px",
  padding: "16px 50px",
  border: "1px solid rgb(26 134 205)",
  backgroundImage:
    "linear-gradient(to top, rgb(54 96 204 / 66%), rgba(177, 176, 176, 0.176))",
  fontWeight: 500,
  fontSize: "32pt",
  maxWidth: "100%"
};

const Collaborate: React.FC<CollaborateProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => {
          navigate("/bmllabs");
        }}
      >
        COLLABORATE
      </button>
      {/* <div style={CollaborateStyle}>
          <AnimationOnScroll animateIn="flipInX">
            <h3 className="text-43 md:text-73 font-bold mb-[50px] border-y border-t-0 inline-block px-[50px]">
              Collaborate
            </h3>
          </AnimationOnScroll>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <div>
              <AnimationOnScroll animateIn="bounceInLeft">
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
              </AnimationOnScroll>
            </div>
            <div className="relative pt-[30px]">
              <AnimationOnScroll animateIn="bounceInRight">
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
              </AnimationOnScroll>
            </div>
          </div>
      </div> */}
    </>
  );
};

export default Collaborate;

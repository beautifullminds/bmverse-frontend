import React, { useState, useRef } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import LandingHeader from "components/blocks/LandingHeader";
import Footer from "components/Footer";
import { sendEmail, validateEmail } from "store/sendmail";
import { toast } from "react-toastify";

interface BMcollabProps {}

const CollaborateStyle = {
  marginTop: "20px",
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

const BMcollab: React.FC<BMcollabProps> = () => {
  const layoutView = useRef(null);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [conversance, setConversance] = useState("");
  const [talent, setTalent] = useState("");
  const [demand, setDemand] = useState("");
  const [linked, setLinked] = useState("");
  const [github, setGithub] = useState("");
  const [fiction, setFiction] = useState("");

  const onSubmit = async () => {
    if (!email) {
      toast.warning("Please insert email!");
    }
    if (email && !validateEmail(email)) {
      toast.warning("Please insert valid email!");
    }

    // const result = await sendEmail({
    //   type,
    //   name,
    //   email,
    //   conversance,
    //   talent,
    //   demand,
    //   linked,
    //   github,
    //   fiction
    // });
    // console.log("res", result);
    toast.success("The data is sent successfully");
  };

  return (
    <Layout ref={layoutView}>
      <div className="landing-container" style={{ minHeight: "auto" }}>
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div style={CollaborateStyle}>
            <div className="text-center">
              <h3 className="text-43 md:text-73 font-bold mb-[50px] border-y border-t-0 inline-block px-[50px]">
                Collaborate
              </h3>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 text-left mb-5 pl-4">
                  <div>
                    <input
                      type="radio"
                      style={radioStyle}
                      name="collaborater"
                      onClick={() => setType("Founder")}
                    />
                     <label className="text-21 font-semibold">Founder</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      style={radioStyle}
                      name="collaborater"
                      onClick={() => setType("Developer")}
                    />
                     <label className="text-21 font-semibold">Developer</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      style={radioStyle}
                      name="collaborater"
                      onClick={() => setType("Community")}
                    />
                     <label className="text-21 font-semibold">Community</label>
                  </div>
                </div>
                <div>
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Conversance"
                    value={conversance}
                    onChange={(e) => setConversance(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Innate talent"
                    value={talent}
                    onChange={(e) => setTalent(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Demand type"
                    value={demand}
                    onChange={(e) => setDemand(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Linkedin - Twitter"
                    value={linked}
                    onChange={(e) => setLinked(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-21 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Github - Discord"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>
              </div>
              <div className="relative pt-[30px]">
                <div className="hex py-4">
                  <textarea
                    rows={15}
                    className="bg-transparent w-full outline-none relative z-99 font-semibold h-[177px] md:h-[360px]"
                    placeholder="What is the fiction about?"
                    value={fiction}
                    onChange={(e) => setFiction(e.target.value)}
                  />
                </div>
                <div className="absolute h-[68px] overflow-hidden w-full m-auto submit-btn">
                  <div
                    className="hex text-black"
                    style={{ background: "#fff" }}
                  >
                    <button
                      className="text-43 text-black font-bold w-full relative"
                      style={submitBtnStyle}
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default BMcollab;

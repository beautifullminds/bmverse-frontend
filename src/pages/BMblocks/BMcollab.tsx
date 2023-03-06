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
  transform: "scale(1.2)",
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
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [fiction, setFiction] = useState("");
  const [incubator, setIncubator] = useState("");

  const onSubmit = async () => {
    if (!type) {
      toast.warning("Please select an option");
      return;
    }
    if (!email) {
      toast.warning("Please insert email!");
      return;
    }
    if (email && !validateEmail(email)) {
      toast.warning("Please insert valid email!");
      return;
    }
    if (!name) {
      toast.warning("Please insert name!");
      return;
    }

    const showIncubator = type === "Founder" ? "" : "none";

    const content = `<table>
    <tbody style={{ fontSize: '20px' }}>
      <tr>
        <th>Type</th>
        <td>${type}</td>
      </tr>
      <tr>
        <th>Name</th>
        <td>${name}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>${email}</td>
      </tr>
      <tr>
        <th>Conversance</th>
        <td>${conversance}</td>
      </tr>
      <tr>
        <th>Innated talent</th>
        <td>${talent}</td>
      </tr>
      <tr>
        <th>Demand type</th>
        <td>${demand}</td>
      </tr>
      <tr>
        <th>Linkedin</th>
        <td>${linked}</td>
      </tr>
      <tr>
        <th>Twitter</th>
        <td>${twitter}</td>
      </tr>
      <tr>
        <th>Github</th>
        <td>${github}</td>
      </tr>
      <tr>
        <th>Discord</th>
        <td>${discord}</td>
      </tr>
      <tr style="display:${showIncubator}">
        <th>Incubator / Accelerator</th>
        <td>${incubator}</td>
      </tr>
      <tr>
        <th>Fiction</th>
        <td>${fiction}</td>
      </tr>
    </tbody></table>`;

    const result = await sendEmail({
      toAddress: "david.Y227@hotmail.com",
      email,
      subject: "Collaborate",
      content
    });
    if (result.status === 200) {
      toast.success("The data is sent successfully");
      setName("");
      setEmail("");
      setConversance("");
      setTalent("");
      setDemand("");
      setFiction("");
      setLinked("");
      setGithub("");
      setDiscord("");
      setTwitter("");
      setIncubator("");
    } else {
      toast.warning("Error occurred");
    }
  };

  return (
    <Layout ref={layoutView}>
      <div className="landing-container" style={{ minHeight: "auto" }}>
        <LandingHeader />
        <Menu />
        <div className="bm-content collab">
          <div style={CollaborateStyle}>
            <div className="text-center">
              <h3 className="text-43 md:text-73 font-bold mb-[50px] border-y border-t-0 inline-block md:px-[50px]">
                Collaborate
              </h3>
            </div>
            <div className="overflow-auto xl:w-[1000px] m-auto">
              <div className="w-full md:w-[470px] xl:float-left">
                <div className="grid grid-cols-1 md:grid-cols-3 text-left mb-5 pl-4">
                  <div>
                    <input
                      id="radio1"
                      type="radio"
                      style={radioStyle}
                      name="collaborater"
                      onClick={() => setType("Founder")}
                    />
                     
                    <label htmlFor="radio1" className="text-18 font-semibold">
                      Founder
                    </label>
                  </div>
                  <div>
                    <input
                      id="radio2"
                      type="radio"
                      style={radioStyle}
                      name="collaborater"
                      onClick={() => setType("Developer")}
                    />
                     
                    <label htmlFor="radio2" className="text-18 font-semibold">
                      Developer
                    </label>
                  </div>
                  <div>
                    <input
                      id="radio3"
                      type="radio"
                      style={radioStyle}
                      name="collaborater"
                      onClick={() => setType("Community")}
                    />
                     
                    <label htmlFor="radio3" className="text-18 font-semibold">
                      Community
                    </label>
                  </div>
                </div>
                <div>
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Conversance"
                    value={conversance}
                    onChange={(e) => setConversance(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Innate talent"
                    value={talent}
                    onChange={(e) => setTalent(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Demand type"
                    value={demand}
                    onChange={(e) => setDemand(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Linkedin"
                    value={linked}
                    onChange={(e) => setLinked(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                  />
                  <input
                    className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                    placeholder="Discord"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                  />
                  {type === "Founder" && (
                    <input
                      className="border-1 rounded-md text-18 p-2 w-full mb-3 bg-transparent border"
                      placeholder="Incubator / Accelerator"
                      value={incubator}
                      onChange={(e) => setIncubator(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div
                className="w-[300px] md:w-[460px] xl:float-left md:mt-[50px] md:ml-[20px]"
                style={{ position: "relative", left: "45px" }}
              >
                <div className="relative pt-[30px]">
                  <div className="hex py-4">
                    <textarea
                      rows={15}
                      className="bg-transparent w-full outline-none relative z-99 font-semibold h-[177px] md:h-[278px]"
                      placeholder="What is the fiction about?"
                      value={fiction}
                      onChange={(e) => setFiction(e.target.value)}
                    />
                  </div>
                  <div className="w-[220px] relative m-auto">
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
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default BMcollab;

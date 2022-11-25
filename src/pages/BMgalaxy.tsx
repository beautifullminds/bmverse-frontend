import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/BMblog";
import Collaborate from "components/Collaborate";

import GalaxyImg from "assets/imgs/galaxy/galaxy.png";
import Galaxy1Img from "assets/imgs/galaxy/galaxy1.png";
import Galaxy5Img from "assets/imgs/galaxy/galaxy5.png";
import LineImg from "assets/imgs/galaxy/Line.png";
import LineImg1 from "assets/imgs/galaxy/lineImg.png";
import LineImg2 from "assets/imgs/galaxy/lineImg2.png";
import ParaImg from "assets/imgs/galaxy/para.png";
import LightTextImg from "assets/imgs/galaxy/lightText.png";
import VainsImg from "assets/imgs/galaxy/vains.png";

interface BMgalaxyProps {}

const bg1Style = {
  borderRadius: "10px",
  background: "rgba(0,0,0,0.2)"
};

const bg2Style = {
  borderRadius: "15px",
  background: "rgba(255,98,0,0.05)",
  border: "1px solid #FF6600"
};

const bg3Style = {
  borderRadius: "15px",
  background: "rgba(42,59,78,0.2)",
  padding: "20px"
};

const BMgalaxy: React.FC<BMgalaxyProps> = () => {
  const layoutView = useRef(null);
  const [scrollH, setScrollH] = useState(-1);

  useEffect(() => {
    setScrollH(0);
    const onScroll = () => setScrollH(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout ref={layoutView} scroll={scrollH}>
      <Menu />
      <div className="bm-content">
        <div className="content text-center">
          <h2 className="text-46 md:text-64 font-bold">BM GALAXY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-[50px]">
            <div
              className={`lg:left-[-1000px] relative ${
                scrollH >= 0 ? "transition-origin" : ""
              }`}
            >
              <img src={GalaxyImg} className="w-full" alt="galaxyimg" />
            </div>
            <div
              className={`text-left text-26 md:text-30 font-medium md:mt-[100px] lg:left-[1000px] relative ${
                scrollH >= 0 ? "transition-origin" : ""
              }`}
            >
              Man, Innately, Is A Creator, Enters The World, Uses Th Creation Of
              Others, Grows, Evolves, And Provides What The Next Generation
              Needs.
            </div>
          </div>
          <div className="my-5">
            <img className="m-auto" src={LineImg} alt="line" />
          </div>
          <div
            className="text-26 font-semibold text-left m-auto"
            style={{ maxWidth: "1027px" }}
          >
            The BM-Galaxy collection, the most comprehensive multiverse
            collection, combines science, art, and history. <br />
            Mankind has been looking for many years to pass the earth and
            discover life in the galaxies. BMGalaxy has gone further in this
            path and seeks to create life in galaxies.
            <br />
            Imagine yourself as a creator of a galaxy who is able to create a
            world without limitations in terms of shape, size, features, etc.
            BMGalaxy has achieved the only experience that mankind is still
            looking for.
          </div>

          <div
            className={`text-36 font-semibold my-[50px] lg:left-[-1700px] relative ${
              scrollH >= 500 ? "transition-origin" : ""
            }`}
          >
            BM Galaxy is a unique masterpiece in combining art and technology.
          </div>
          <video className="m-auto" loop autoPlay muted>
            <source
              src={require("assets/imgs/galaxy/sunVideo.mp4")}
              type="video/mp4"
            />
          </video>
          <div className="my-[50px]">
            <img className="m-auto" src={LineImg} alt="line" />
          </div>

          <div className="md:grid md:grid-cols-2 w-full">
            <div className="col-start-2">
              <video
                className="m-auto md:float-right md:w-2/3"
                loop
                autoPlay
                muted
              >
                <source
                  src={require("assets/imgs/galaxy/video1.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className={`text-left font-medium lg:top-[1000px] relative ${
                scrollH >= 1300 ? "transition-origin" : ""
              }`}
            >
              <p style={bg1Style} className="p-2 text-10 md:text-19">
                The Galaxies on which BMgalaxy is defined can be considered as a
                living thing, similar to the nature in which we live. These
                galaxies, which were created 30 years ago without any concept
                design, were created by millions of dots, each of which was the
                result of a particular vibration in the brain of the designer
                artist.
              </p>
            </div>
            <div className="text-left">
              <img
                src={LineImg1}
                alt="line"
                className="relative w-1/2 left-[20px] top-[-80px] hidden md:inline-block"
              />
            </div>
            <div
              className={`col-start-2 text-left font-medium mt-[50px] md:mt-0 lg:top-[1000px] relative ${
                scrollH >= 1630 ? "transition-origin" : ""
              }`}
            >
              <p style={bg1Style} className="p-2 text-10 md:text-19">
                <span className="text-orange">Wealth</span> is in our minds, and
                only creativity and excitement will make it real.
              </p>
            </div>
            <div>
              <video
                className="m-auto md:float-right md:w-2/3"
                loop
                autoPlay
                muted
              >
                <source
                  src={require("assets/imgs/galaxy/video2.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="text-left">
              <img
                src={LineImg2}
                alt="line"
                className="relative w-2/3 left-[-10vw] hidden md:inline-block"
              />
            </div>
            <div
              className={`col-start-2 text-left font-medium md:mt-[-50px] lg:top-[1000px] relative ${
                scrollH >= 1950 ? "transition-origin" : ""
              }`}
            >
              <img src={ParaImg} alt="para" />
            </div>
          </div>
        </div>
        <img src={LightTextImg} className="w-full" alt="lighttext" />
        <div
          className="content text-center"
          style={{ marginTop: 0, paddingTop: "70px" }}
        >
          <h3 className="text-24 md:text-36 font-semibold pb-6">
            “Applying Science And Laws Of Nature To Realize Imagination”
          </h3>
          <div className="md:flex">
            <div
              className={`w-full md:w-2/3 md:flex md:pr-3 lg:left-[-1400px] relative ${
                scrollH >= 2400 ? "transition-origin" : ""
              }`}
            >
              <img src={Galaxy5Img} alt="galaxy" className="object-contain" />
            </div>
            <div
              className={`text-18 md:text-24 w-full md:w-1/3 py-5 px-3 lg:left-[1400px] relative ${
                scrollH >= 2400 ? "transition-origin" : ""
              }`}
              style={bg2Style}
            >
              Relying on the data obtained from the analysis of the frequencies
              produced and received by the brain, we realized that it is
              possible to provide gamers with the most realistic sense of a
              virtual world by analyzing and regulating these vibrations and
              establishing communication between the parts of the brain that are
              more active in creativity and mental imagery with a
              super-intelligent core of Metaverse-based games.
            </div>
          </div>
          <div
            className={`lg:top-[1400px] relative ${
              scrollH >= 2900 ? "transition-origin" : ""
            }`}
          >
            <img
              src={Galaxy1Img}
              alt="galaxy"
              className="md:w-3/4 mx-auto my-6"
            />
          </div>

          <div className="text-18 md:text-26 font-semibold" style={bg3Style}>
            Using Particle Systems, Simulators Developed In Artificial
            Intelligence, And Machine Learning, We Created A Unique Interaction
            Between The Human Brain Waves, Brain Galactic Frequency Reception,
            And Creator Algorithms. This Interaction, Which As A Matter Of Fact
            Includes The Emotions, Thoughts, And Creativity Between The Player
            And The Super-Intelligent Core Of Our Metaverse Game, Makes
            Connections Between The Player’s Brain Neurons.
          </div>
          <div
            className={`lg:left-[1400px] relative ${
              scrollH >= 3700 ? "transition-origin" : ""
            }`}
          >
            <img src={VainsImg} alt="galaxy" className="mt-[120px]" />
          </div>

          <div
            className="text-14 md:text-24 font-semibold mt-5"
            style={bg3Style}
          >
            All brain waves are generated by coordinated electrical pulses from
            masses of interconnected neurons; Which will ultimately create the
            unique interactive assets between the metaverse and the real world.
            The galaxies on which BMVerse is defined can be considered as a
            living thing, just like the nature in which we live.
          </div>
          <div className="text-22 md:text-32 font-bold mt-[40px]">
            Wealth is in our minds, and only creativity and excitement will make
            it real. <br />
            Creativity provides ways that few have gone; <br />
            BMverse is with you on this exciting journey.
          </div>
        </div>
      </div>
      <div className="com-content">
        <BMblog scroll={scrollH} />
      </div>
      <div className="com-content">
        <Collaborate scroll={scrollH} />
      </div>
    </Layout>
  );
};

export default BMgalaxy;

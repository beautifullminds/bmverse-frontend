import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";
import BMcontact from "components/blocks/BMcontact";
import Footer from "components/Footer";

import BgImg from "../../assets/imgs/music/bg.png";
import Galary1Img from "../../assets/imgs/music/galary1.png";
import Galary2Img from "../../assets/imgs/music/galary2.png";
import Galary3Img from "../../assets/imgs/music/galary3.png";

interface BMmusicProps {}

const BMmusic: React.FC<BMmusicProps> = () => {
  const layoutView = useRef(null);

  return (
    <Layout ref={layoutView}>
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="content text-center">
            <h2 className="text-46 md:text-64 font-bold">BM MUSIC</h2>
            <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px]">
              <span className="text-32 font-bold">BM M</span>usic is actually a
              platform for recording artistic works in the music industry.
              <span className="text-32 font-bold"> W</span>ith this platform,
              every artist in the mucic industry will be sure that he/she will
              have all the moral and property rights of his/her works forever.{" "}
              <span className="text-32 font-bold"> M</span>
              usic plays an essential role in the progress of the
              <span className="text-32 font-bold"> BMV</span>erse project,
              because the identity cards purchased to enter the
              <span className="text-32 font-bold"> BMG</span>
              roup <span className="text-32 font-bold"> M</span>
              etaverse will be
            </div>
            <div>
              <AnimationOnScroll animateIn="flipInY">
                <img
                  src={BgImg}
                  className="full-img my-[80px] max-w-none"
                  alt="bg"
                />
              </AnimationOnScroll>
            </div>

            <div className="uppercase text-32 font-bold break-all pt-4 [word-spacing: 7px]">
              <AnimationOnScroll animateIn="bounceInLeft">
                <span className="text-42">I</span>n fact, verified by the wave
                produced by each track
              </AnimationOnScroll>
            </div>
            <div className="uppercase text-30 break-all pt-4 [word-spacing: 7px] text-left my-[60px]">
              <AnimationOnScroll animateIn="bounceInRight">
                the word "<span className="text-38">I</span>dentity" refers to
                the identity of the characters,
                <span className="text-38"> L</span>et's say it more clearly, the
                owner of the identity of any character can have the ability to
                travel in <span className="text-38">M</span>
                etaverse of <span className="text-38">BM M</span>ega and
                <span className="text-38"> BM G</span>alaxy.
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="fadeIn">
              <div className="md:grid grid-cols-3 gap-6">
                <img src={Galary1Img} className="w-full" alt="galary" />
                <img src={Galary2Img} className="w-full" alt="galary" />
                <img src={Galary3Img} className="w-full" alt="galary" />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="com-content">
          <BMblog />
        </div>
        <div className="com-content">
          <Collaborate />
        </div>
        <BMcontact />
        <Footer />
      </div>
    </Layout>
  );
};

export default BMmusic;

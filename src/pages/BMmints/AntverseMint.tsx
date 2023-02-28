import React, { useRef, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "components/Layout";
import ScrollTopBtn from "components/ScrollTopBtn";

import TmImg from "assets/imgs/antversemint/Tm.png";
import DayaalaImg from "assets/imgs/antversemint/Daya'ala.png";
import SidityImg from "assets/imgs/antversemint/Sidity.png";
import EpicAsset1Img from "assets/imgs/antversemint/asset1.png";
import EpicAsset2Img from "assets/imgs/antversemint/asset2.png";
import EpicAsset3Img from "assets/imgs/antversemint/asset3.png";
import EpicAsset4Img from "assets/imgs/antversemint/asset4.png";
import EpicAsset5Img from "assets/imgs/antversemint/asset5.png";
import EpicAsset6Img from "assets/imgs/antversemint/asset6.png";
import GirlImg from "assets/imgs/antversemint/girl.png";
import DragonImg from "assets/imgs/antversemint/Dragon.png";
import CardImg from "assets/imgs/antversemint/card.png";
import IconImg from "assets/imgs/antversemint/icon.png";
import SunRaysImg from "assets/imgs/antversemint/Sun Rays.png";
import bloodWarImg from "assets/imgs/antversemint/blood war.png";
import TransformationImg from "assets/imgs/antversemint/Transformation.png";
import TouchesImg from "assets/imgs/antversemint/touches.png";
import CardLineImg from "assets/imgs/antversemint/card-line.png";
import RenderImg from "assets/imgs/antversemint/render.png";
import BloomImg from "assets/imgs/antversemint/Bloom.png";
import DayaalImg from "assets/imgs/antversemint/Dayaal.png";
import QueenBereniceImg from "assets/imgs/antversemint/Queen Berenice.png";
import AntonAntsteinImg from "assets/imgs/antversemint/AntonAntstein.png";
import RenataImg from "assets/imgs/antversemint/Renata.png";
import QueenFariciahImg from "assets/imgs/antversemint/Queen Fariciah.png";
import AntoanImg from "assets/imgs/antversemint/Antoan.png";
import BerenecImg from "assets/imgs/antversemint/Berenec.png";
import Bloom1Img from "assets/imgs/antversemint/Bloom-1.png";
import DayalaImg from "assets/imgs/antversemint/Dayala.png";
import QueenImg from "assets/imgs/antversemint/Queen.png";
import RenetaImg from "assets/imgs/antversemint/Reneta.png";
import BlomeImg from "assets/imgs/antversemint/Blome.png";

interface AntverseMintProps {}

const contentStyle = {
  backgroundImage:
    "linear-gradient(-125deg, #3d001c 0%, #4f0024 750px,  #df0068 1500px, #23131b 2500px, #3e3e3e 100%)",
  paddingBottom: "300px"
};

const epicAssetStyle = {
  background: "#bb0142",
  borderRadius: "32px",
  padding: "20px"
};

const mintBtnStyle = {
  background: "url(" + require("assets/imgs/antversemint/mintbtn.png") + ")",
  width: "136px",
  height: "76px",
  backgroundSize: "100%"
};

const identityStyle = {
  background: "#a41e5c",
  borderRadius: "25px",
  padding: "20px 10px"
};

const dynamicAssetStyle = {
  backgroundImage:
    "linear-gradient(-125deg, #66203f 0%, #452232 20%, #362930 100%)",
  borderRadius: "25px"
};

const AntverseMint: React.FC<AntverseMintProps> = () => {
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
    <Layout ref={layoutView}>
      <div
        className="text-center overflow-hidden pt-[93px] md:pt-[62px]"
        style={contentStyle}
      >
        <h1 className="text-82 md:text-96">MINT ZONE</h1>
        <p className="text-47 md:text-55 font-semibold">
          ANTverse Series From BM Mega
        </p>
        <div className="md:grid grid-cols-3 relative md:min-h-[250px] xl:min-h-[500px]">
          <div className="relative">
            <img
              className="mt-4 xl:min-w-[660px] xl:absolute bottom-0"
              src={TmImg}
              alt="Tm"
            />
          </div>
          <div className="relative">
            <img
              className="mt-4 xl:min-w-[660px] xl:absolute bottom-0"
              src={DayaalaImg}
              alt="Dayaala"
            />
          </div>
          <div className="relative">
            <img
              className="mt-4 xl:min-w-[800px] xl:absolute bottom-0"
              src={SidityImg}
              alt="Sidity"
            />
          </div>
        </div>
        <div className="px-[20px] md:px-[40px] xl:px-[150px]">
          <div className="overflow-y-auto overflow-x-hidden p-5">
            <div className="w-80 max-w-[640px] border-y border-t-0 border-gray text-left m-auto lg:m-1 text-56 font-semibold">
              <AnimationOnScroll animateIn="bounceInLeft">
                EPIC Assets
              </AnimationOnScroll>
            </div>
            <div
              className={`lg:float-left lg:left-[-2000px] relative ${
                scrollH >= 370 ? "transition-origin" : ""
              }`}
            >
              <AnimationOnScroll animateIn="bounceInLeft">
                <div
                  style={epicAssetStyle}
                  className="mt-4 inline-block text-center"
                >
                  <div>
                    <img className="inline" src={EpicAsset1Img} alt="epic" />
                    <img className="inline" src={EpicAsset2Img} alt="epic" />
                  </div>
                  <div>
                    <img className="inline" src={EpicAsset3Img} alt="epic" />
                    <img className="inline" src={EpicAsset4Img} alt="epic" />
                  </div>
                  <div>
                    <img className="inline" src={EpicAsset5Img} alt="epic" />
                    <img className="inline" src={EpicAsset6Img} alt="epic" />
                  </div>
                </div>
                <div className="w-full mt-3">
                  <button
                    style={mintBtnStyle}
                    className="border-0 text-28 font-semibold"
                  >
                    Mint
                  </button>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="lg:float-right md:w-1/2 md:max-w-[560px] m-auto text-left">
              <AnimationOnScroll animateIn="bounceInRight">
                <img className="mt-3 mx-auto" src={GirlImg} alt="girl" />
                <h4 className="mt-[10px] text-37 font-bold pr-[50px] border-y border-t-0 inline-block">
                  Rarity 1/1
                </h4>
                <p className="mt-3 break-words text-19 font-medium">
                  Every person who buys the character does not necessarily own
                  all the sub assets, and only by purchasing the character, 3
                  Dynamic Sub-assets will be airdrop for her.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div>
            <div className="border-y border-t-0 border-gray text-left mx-auto mb-4 text-56 font-semibold px-[100px] inline-block mt-4">
              <AnimationOnScroll animateIn="flipInY">
                Magical Ability
              </AnimationOnScroll>
            </div>
            <div className="md:grid grid-cols-3 overflow-hidden">
              <div className="col-start-2">
                <AnimationOnScroll animateIn="fadeIn">
                  <div className="text-center text-29 font-semibold">1/1</div>
                  <img className="m-auto" src={DragonImg} alt="dragon" />
                  <div className="text-43 font-semibold tracking-standard">
                    Miracle
                  </div>
                </AnimationOnScroll>
              </div>
              <div className="col-start-1">
                <AnimationOnScroll animateIn="bounceInLeft">
                  <div className="flex">
                    <div className="-rotate-90 text-33 font-semibold min-w-[180px] h-[56px] relative top-[95px] -left-[60px]">
                      Potion Cards
                    </div>
                    <img
                      className="-ml-[145px]"
                      src={CardImg}
                      alt="card"
                      width={250}
                    />
                  </div>
                  <div className="w-[340px]">
                    <img
                      src={CardLineImg}
                      className="inline-block"
                      alt="cardline"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 w-[330px]">
                    <img src={SunRaysImg} alt="sunrays" />
                    <img src={bloodWarImg} alt="bloodwar" />
                    <img src={TransformationImg} alt="transform" />
                  </div>
                  <div className="w-[330px]">1/3</div>
                </AnimationOnScroll>
              </div>
              <div className="relative min-h-[150px]">
                <div
                  className="w-full absolute"
                  style={{
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50%, -50%)",
                    width: "136px",
                    margin: "auto"
                  }}
                >
                  <button
                    style={mintBtnStyle}
                    className="border-0 text-28 font-semibold"
                  >
                    Mint
                  </button>
                  <div className="hidden md:block w-[2px] h-[210px] absolute left-[68px] top-[-210px] bg-white"></div>
                  <div className="hidden md:block w-[12vw] h-[2px] absolute left-[-12vw] top-[50px] bg-white -rotate-12"></div>
                  <div className="hidden md:block w-[12vw] h-[2px] absolute left-[100%] top-[50px] bg-white rotate-12"></div>
                </div>
              </div>
              <div>
                <AnimationOnScroll animateIn="bounceInRight">
                  <div className="w-full h-[260px]">
                    <div className="flex right-0 float-right content-right w-[290px]">
                      <img
                        className="inline-block"
                        src={IconImg}
                        alt="icon"
                        width={250}
                      />
                      <div className="rotate-90 text-33 font-semibold min-w-[208px] h-[56px] relative top-[95px] -left-[80px]">
                        Miracle Custom
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <img
                      src={TouchesImg}
                      alt="touches"
                      className="inline-block shadow-[0px_7px_5px_rgba(0,0,0,0.3)] rounded-[15px] mt-[30px]"
                    />
                  </div>
                  <div className="w-[314px] float-right mt-4">1/1</div>
                </AnimationOnScroll>
              </div>
              <div className="col-start-2 mt-[100px]">
                <AnimationOnScroll animateIn="fadeIn">
                  <img
                    src={RenderImg}
                    alt="render"
                    className="scale-125 mx-auto"
                  />
                </AnimationOnScroll>
              </div>
            </div>
            <AnimationOnScroll animateIn="bounceInLeft">
              <div style={identityStyle} className="mt-5">
                <h3 className="text-42 md:text-53 font-semibold">IDENTITY</h3>
                <div className="w-4/5 max-w-[530px] h-[1px] bg-gray m-auto"></div>
                <p className="text-26 font-medium tracking-standard">BMMusic</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-[50px]">
                  <img src={BloomImg} className="w-full" alt="bloom" />
                  <img src={DayaalImg} className="w-full" alt="dayaa" />
                  <img
                    src={QueenBereniceImg}
                    className="w-full"
                    alt="queenberenice"
                  />
                  <img
                    src={AntonAntsteinImg}
                    className="w-full"
                    alt="antonantstein"
                  />
                  <img src={RenataImg} className="w-full" alt="renata" />
                  <img
                    src={QueenFariciahImg}
                    className="w-full"
                    alt="queenfariciah"
                  />
                </div>
                <div className="text-center mt-4 text-29 font-semibold">
                  1/1
                </div>
              </div>
            </AnimationOnScroll>
            <p className="text-25 my-[50px] font-medium px-4">
              the word “Identity” refers to the identity of the characters.
              Let’s say it more clearly, the owner of the identity of any
              character can have the ability to travel in Metaverse of AntVerse
              and BM Galaxy.
            </p>
            <p className="text-26 font-semibold">
              Metaverse will be verified by the music (in fact by the wave
              produced by each track) existed in the identity card.
            </p>
            <AnimationOnScroll animateIn="wobble">
              <button
                style={mintBtnStyle}
                className="border-0 text-28 font-semibold mt-5 mb-[20px]"
              >
                Mint
              </button>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="flipInX">
              <h3 className="text-51 font-semibold max-w-[570px] border-gray border-y border-t-0 mx-auto">
                Dynamic Assets 1/99
              </h3>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="px-[20px] md:px-[30px] xl:px-[130px] mt-[40px]">
          <AnimationOnScroll animateIn="flipInY">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 px-[50px] md:px-[100px] py-[20px]"
              style={dynamicAssetStyle}
            >
              <img src={AntoanImg} className="w-full" alt="antoan" />
              <img src={BerenecImg} className="w-full" alt="berabec" />
              <img src={Bloom1Img} className="w-full" alt="bloom1" />
              <img src={DayalaImg} className="w-full" alt="dayala" />
              <img src={QueenImg} className="w-full" alt="queen" />
              <img src={RenetaImg} className="w-full" alt="renata" />
            </div>
          </AnimationOnScroll>
        </div>
        <div className="my-[40px] max-w-[1090px] mx-auto text-left px-[50px]">
          <AnimationOnScroll animateIn="flipInX">
            <p className="text-28 font-semibold">
              10% of all purchases and sales of sub assets go to the owner of
              the epic character for allowing them access to the read only
              version.
            </p>
          </AnimationOnScroll>
          <div className="grid grid-cols-2 my-[40px]">
            <div className="text-center">
              <AnimationOnScroll animateIn="bounceInLeft">
                <button
                  style={mintBtnStyle}
                  className="border-0 text-28 font-semibold"
                >
                  Mint
                </button>
              </AnimationOnScroll>
            </div>
            <div className="text-center">
              <AnimationOnScroll animateIn="bounceInRight">
                <button
                  style={mintBtnStyle}
                  className="border-0 text-28 font-semibold"
                >
                  Edit
                </button>
              </AnimationOnScroll>
            </div>
          </div>
          <AnimationOnScroll animateIn="fadeIn">
            <img src={BlomeImg} alt="blome" className="m-auto" />
          </AnimationOnScroll>
        </div>
      </div>
      <ScrollTopBtn />
    </Layout>
  );
};

export default AntverseMint;

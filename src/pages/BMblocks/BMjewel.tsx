import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";
import Footer from "components/Footer";

import SnakImg from "assets/imgs/jewel/Snak.png";
import BoxImg from "assets/imgs/jewel/box.png";
import RenataImg from "assets/imgs/jewel/Renata.png";
import DragonImg from "assets/imgs/jewel/Dragon.png";
import JewelsImg from "assets/imgs/jewel/jewels.png";

interface BMjewelProps {}

const bg1Style = {
  background: "rgba(0,0,0,0.2)",
  borderRadius: "20px",
  padding: "30px"
};

const bg2Style = {
  background: "rgba(0,0,0,0.5)",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0px 9px 0px rgba(0,0,0,0.2)"
};

const BMjewel: React.FC<BMjewelProps> = () => {
  const layoutView = useRef(null);

  return (
    <Layout ref={layoutView}>
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="content text-center bg-transparent">
            <h2 className="text-46 md:text-64 font-bold">
              B<span className="text-24 md:text-42">M</span> J
              <span className="text-24 md:text-42">EWEL</span>
            </h2>
            <img src={SnakImg} className="w-4/5 m-auto" alt="snake" />

            <div className="text-24 md:text-38 font-semibold my-[30px]">
              “BM Jewel, the climax point in challenging the boundaries between
              reality and imagination”
            </div>
            <div className="text-19 md:text-28 font-medium px-[20px]">
              The idea of ​​making jewelry at BMVerse is actually a landmark in
              challenging the boundaries of the real and virtual world.
              Combining the intrinsic value of a piece of art with its virtual
              potential value, shows that creativity and technology cannot be
              valued alongside the art. By working on a precious physical asset
              in a non-physical world, we have succeeded in creating an asset
              that simultaneously can be categorized as a fungible and
              non-fungible asset.
            </div>
            <div className="mt-[50px] overflow-y-auto overflow-x-hidden">
              <AnimationOnScroll animateIn="bounceInLeft">
                <div
                  className="w-full md:w-[55%] md:pl-[20px] md:mb-[-180px]"
                  style={bg1Style}
                >
                  <p className="text-32 md:text-47 font-semibold">
                    Miracle Ability Activator
                  </p>
                  <img src={BoxImg} alt="box" />
                </div>
              </AnimationOnScroll>
              <div className="w-full md:w-[55%] md:float-right">
                <AnimationOnScroll animateIn="bounceInRight">
                  <img src={RenataImg} alt="renata" />
                </AnimationOnScroll>
              </div>
            </div>
            <AnimationOnScroll animateIn="fadeIn">
              <div
                className="text-19 md:text-28 font-medium w-full text-left mt-4"
                style={bg2Style}
              >
                BMJewels is kind of hashed jewels that exists in the real world
                but having it can simultaneously enable its owner to generate
                value in a virtual world as well. What feature can make the
                connection between a real world and a virtual world so
                inseparable?
              </div>
            </AnimationOnScroll>
            <div className="xl:grid grid-cols-2 mt-[140px] md:mt-[350px]">
              <div>
                <AnimationOnScroll animateIn="bounceInLeft">
                  <img
                    src={DragonImg}
                    alt="dragon"
                    style={{ transform: "scale(2)" }}
                    className="relative max-w-[200px] md:max-w-[400px] xl:max-w-full"
                  />
                </AnimationOnScroll>
              </div>
              <div className="flex items-center p-2 md:pl-[60px]">
                <AnimationOnScroll animateIn="bounceInRight">
                  <div
                    className="text-19 xl:text-26 font-medium w-full text-left mt-4"
                    style={bg2Style}
                  >
                    The advantage of the NFTs available in the BMJewels section
                    is their high value. These jewels, which are all made by
                    hand, have a high inherent value due to the artistic design
                    done on them. The origin of these jewels are actually the
                    abilities and capabilities of the characters in the Mega
                    Collection, so that the owner of each of these jewels can
                    activate a special feature for their characters and promote
                    it by using the codes engraved on them.
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="xl:grid grid-cols-2">
              <div className="col-start-2">
                <AnimationOnScroll animateIn="bounceInRight">
                  <img src={JewelsImg} alt="jewels" />
                </AnimationOnScroll>
              </div>
            </div>
            <div className="mt-[50px] text-24 md:text-36 font-semibold text-left md:w-4/5">
              <AnimationOnScroll animateIn="bounceInLeft">
                All the NFTs that exist in BMVerse are all made by great experts
                and artists, and months of time have been spent to prepare each
                of them, and finally all are traceable on the BM Group native
                NFT Market Place.
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className="com-content">
          <BMblog />
        </div>
        <div className="com-content">
          <Collaborate />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default BMjewel;

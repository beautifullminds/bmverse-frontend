import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/BMblog";
import Collaborate from "components/Collaborate";

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
        <div className="content text-center bg-transparent">
          <h2 className="text-46 md:text-64 font-bold">
            B<span className="text-24 md:text-42">M</span> J
            <span className="text-24 md:text-42">EWEL</span>
          </h2>
          <div
            className={`lg:left-[1500px] relative ${
              scrollH >= 0 ? "transition-origin" : ""
            }`}
          >
            <img src={SnakImg} className="w-4/5 m-auto" alt="snake" />
          </div>

          <div className="text-24 md:text-38 font-semibold my-[30px]">
            “BM Jewel, the climax point in challenging the boundaries between
            reality and imagination”
          </div>
          <div className="text-19 md:text-28 font-medium px-[20px]">
            The idea of ​​making jewelry at BMVerse is actually a landmark in
            challenging the boundaries of the real and virtual world. Combining
            the intrinsic value of a piece of art with its virtual potential
            value, shows that creativity and technology cannot be valued
            alongside the art. By working on a precious physical asset in a
            non-physical world, we have succeeded in creating an asset that
            simultaneously can be categorized as a fungible and non-fungible
            asset.
          </div>
          <div className="mt-[50px] overflow-y-auto overflow-x-hidden">
            <div
              className={`w-full md:w-[55%] md:pl-[20px] md:mb-[-180px] lg:left-[-1500px] relative ${
                scrollH >= 250 ? "transition-origin" : ""
              }`}
              style={bg1Style}
            >
              <p className="text-32 md:text-47 font-semibold">
                Miracle Ability Activator
              </p>
              <img src={BoxImg} alt="box" />
            </div>
            <div
              className={`w-full md:w-[55%] md:float-right lg:left-[1500px] relative ${
                scrollH >= 250 ? "transition-origin" : ""
              }`}
            >
              <img src={RenataImg} alt="renata" />
            </div>
          </div>
          <div
            className="text-19 md:text-28 font-medium w-full text-left mt-4"
            style={bg2Style}
          >
            BMJewels is kind of hashed jewels that exists in the real world but
            having it can simultaneously enable its owner to generate value in a
            virtual world as well. What feature can make the connection between
            a real world and a virtual world so inseparable?
          </div>
          <div className="xl:grid grid-cols-2 mt-[140px] md:mt-[350px]">
            <div
              className={`lg:left-[-1500px] relative ${
                scrollH >= 1260 ? "transition-origin" : ""
              }`}
            >
              <img
                src={DragonImg}
                alt="dragon"
                style={{ transform: "scale(2)" }}
                className="relative max-w-[200px] md:max-w-[400px] xl:max-w-full"
              />
            </div>
            <div className="flex items-center p-2 md:pl-[60px]">
              <div
                className="text-19 xl:text-26 font-medium w-full text-left mt-4"
                style={bg2Style}
              >
                The advantage of the NFTs available in the BMJewels section is
                their high value. These jewels, which are all made by hand, have
                a high inherent value due to the artistic design done on them.
                The origin of these jewels are actually the abilities and
                capabilities of the characters in the Mega Collection, so that
                the owner of each of these jewels can activate a special feature
                for their characters and promote it by using the codes engraved
                on them.
              </div>
            </div>
          </div>
          <div className="xl:grid grid-cols-2">
            <div className="col-start-2">
              <img src={JewelsImg} alt="jewels" />
            </div>
          </div>
          <div className="mt-[50px] text-24 md:text-36 font-semibold text-left md:w-4/5">
            All the NFTs that exist in BMVerse are all made by great experts and
            artists, and months of time have been spent to prepare each of them,
            and finally all are traceable on the BM Group native NFT Market
            Place.
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

export default BMjewel;

import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";

import Galaxy1Img from "assets/imgs/learn/galaxy1.png";
import GadeImg from "assets/imgs/mega/gade.png";
import JewelImg from "assets/imgs/learn/jewel.png";
import Galaxy2Img from "assets/imgs/learn/galaxy2.png";
import PuppetImg from "assets/imgs/learn/puppet.png";
import AimImg from "assets/imgs/learn/aim.png";

interface BMlearnProps {}

const bg1Style = {
  borderRadius: "18px",
  background: "#342936",
  padding: "40px"
};

const bg2Style = {
  borderRadius: "38px",
  background: "rgba(37,42,53,0.4)",
  padding: "30px",
  border: "1px solid #6b84b0"
};

const circleStyle = {
  width: "240px",
  height: "240px",
  borderRadius: "50%",
  opacity: "0.5"
};

const BMlearn: React.FC<BMlearnProps> = () => {
  const layoutView = useRef(null);
  const [scrollH, setScrollH] = useState(-1);

  useEffect(() => {
    setScrollH(0);
    const onScroll = () => setScrollH(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(scrollH);

  return (
    <Layout ref={layoutView} scroll={scrollH}>
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="text-center mt-[30px]">
            <h2 className="text-46 md:text-64 font-bold border-y border-t-0 inline-block px-5">
              B<span className="text-24 md:text-42">M</span> L
              <span className="text-24 md:text-42">EARN</span>
            </h2>
            <p className="text-28 font-medium mt-4">
              The Decentralized and Specialized Educational Platform Resistant
              to Censorship
            </p>
            <div
              className={`my-[30px] lg:left-[-1000px] relative ${
                scrollH >= 0 ? "transition-origin" : ""
              }`}
            >
              <img src={Galaxy1Img} alt="galaxy" />
            </div>
          </div>
          <div
            className="relative mb-[-40px] z-20 w-full border overflow-hidden"
            style={bg1Style}
          >
            <h3 className="text-32 text-center font-semibold mb-[20px]">
              WHAT IS NEW IN BMLEARN
            </h3>
            <p>
              The exchange of educational information will reach its peak in
              future generations, and this is exactily where the capitalist
              system will try to change the entire educational content for its
              own benefit. In bm learn, all educational content is first
              approved by the proof of content consensus algorithm in a
              completely decentralized manner under the supervision of the most
              specialized educational centers in the world and is hashed in the
              blockchain network before any censorship. As it was said, we
              create nft educational content at bmlearn. In fact, we are
              building and completing an educational platform that connects the
              world of education to the world of nfts, so that the rights of the
              content creators are completely saved, and the produced content is
              safe from any censorship. In fact, the two principles of purity
              and rarity will be in all the content available in bmlearn.
            </p>
            <div
              className="absolute left-[-120px] top-[-120px] bg-blue"
              style={circleStyle}
            ></div>
            <div
              className="absolute right-[-120px] bottom-[-120px] bg-red"
              style={circleStyle}
            ></div>
          </div>
          <div className="content text-center z-10">
            <div className="md:grid grid-cols-2 mt-[30px]">
              <div
                className={`flex items-center lg:left-[-1500px] relative ${
                  scrollH >= 350 ? "transition-origin" : ""
                }`}
              >
                <img
                  src={GadeImg}
                  alt="gade"
                  style={{ transform: "scaleY(1.4)" }}
                />
              </div>
              <div
                className={`text-left mt-4 lg:left-[1500px] relative ${
                  scrollH >= 350 ? "transition-origin" : ""
                }`}
              >
                <h3 className="text-30 font-semibold">
                  WHY THE GENERATION ALPHA?
                </h3>
                <p className="mt-5" style={bg2Style}>
                  The exchange of educational information will reach its peak in
                  future generations, and this is exactily where the capitalist
                  system will try to change the entire educational content for
                  its own benefit. In bm learn, all educational content is first
                  approved by the proof of content consensus algorithm in a
                  completely decentralized manner under the supervision of the
                  most specialized educational centers in the world and is
                  hashed in the blockchain network before any censorship. As it
                  was said, we create nft educational content at bmlearn. In
                  fact, we are building and completing an educational platform
                  that connects the world of education to the world of nfts, so
                  that the rights of the content creators are completely saved,
                  and the produced content is safe from any censorship. In fact,
                  the two principles of purity and rarity will be in all the
                  content available in bmlearn.
                </p>
              </div>
            </div>
            <div className="md:grid grid-cols-2 mt-[30px]">
              <div
                className={`text-left mb-4 lg:left-[-1500px] relative ${
                  scrollH >= 950 ? "transition-origin" : ""
                }`}
              >
                <h3 className="text-30 font-semibold">
                  WHO BENEFITS FROM BMLEARN?
                </h3>
                <p className="mt-5" style={bg2Style}>
                  It is true that the main focus of the educational Content
                  category is on the alpha generation, but This does not mean
                  that other people will not have a Place in this educational
                  platform. In fact, teachers of generation alpha will be the
                  (gen-z). The creators and owners of the content produced in
                  this educational platform will be generation z. In this way,
                  bmlearn will create an unbreakable bond between the savior
                  generation and their teachers.
                </p>
              </div>
              <div
                className={`flex items-center justify-center lg:left-[1500px] relative ${
                  scrollH >= 950 ? "transition-origin" : ""
                }`}
              >
                <img src={JewelImg} alt="jewel" className="w-4/5" />
              </div>
            </div>
            <div
              className={`mt-[30px] lg:top-[1500px] relative ${
                scrollH >= 1450 ? "transition-origin" : ""
              }`}
            >
              <img src={Galaxy2Img} alt="galaxy" className="md:w-4/5 m-auto" />
            </div>
            <h3 className="text-32 text-center font-semibold mt-[20px]">
              WHY A DECENTRALIZED PLATFORM?
            </h3>
            <p className="mt-[40px] md:text-22 md:w-5/6 m-auto">
              The answer is clear. The most secure and reliable platform for
              storing data is a decentralized platform. If the data storage or
              transfer is under human control, consequences such as censorship
              and plagiarism will not be out of Mind. In such a platform (which
              we have seen so far under the name of various educational
              websites), no learner is placed on the path of learning with 100%
              confidence in the authenticity of the content. On the other hand,
              publishers of educational content who spend a lot of time and
              money to produce a training course need to be sure that the result
              of their efforts is not published on another platform and under
              the name of another person. Otherwise, no one will have the
              motation to produce professional content.
            </p>
            <div className="mt-5 md:flex">
              <div
                className={`md:w-1/3 lg:left-[-1500px] relative ${
                  scrollH >= 2150 ? "transition-origin" : ""
                }`}
              >
                <img src={PuppetImg} alt="puppet" />
              </div>
              <div
                className={`md:w-2/3 flex items-center lg:left-[1500px] relative ${
                  scrollH >= 2150 ? "transition-origin" : ""
                }`}
              >
                <div className="text-left">
                  <h3 className="text-30 font-semibold">
                    WHO CONFIRMS THE SCIENTIFIC VALIDITY OF A CONTENT?
                  </h3>
                  <p className="mt-5" style={bg2Style}>
                    By using the proof of content algorithm, bm learning
                    guarantees that no content outside the logic of science will
                    be published. The proof of content algorithm, which is the
                    result of round the clock research by the experts of the
                    bmgroup, in cooperation with the most prestigious
                    universities and Scientific centers located all over the
                    world, has provided a path in which all centers speicalizing
                    in different sciences work together to confirm the
                    Scientific validity of a content and of course receive
                    rewards for their activity.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-32 text-center font-semibold mt-[20px]">
              BM LEARN AIMS
            </h3>
            <p className="mt-[40px] md:text-22 md:w-5/6 m-auto">
              Bm learn aims to create an environment to earn money for teachers
              and students and to upgrade the level of knowledge in the field of
              blockchain, advanced and innovative technologies and
              cryptocurrencies based on a native token.
            </p>
            <div
              className={`md:grid grid-cols-6 md:w-5/6 mx-auto gap-5 mt-[20px] text-left lg:left-[1500px] relative ${
                scrollH >= 2800 ? "transition-origin" : ""
              }`}
            >
              <div className="col-span-2 mt-2 relative">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Specialized categories
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-span-2 mt-2">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Teacher's coummunity
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-span-2 mt-2">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Different user panels
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-start-2 col-span-2 mt-2 md:mt-[-30px]">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Watch to earn for students
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-span-2 mt-2 md:mt-[-30px]">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Teach to earn for students
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-span-2 mt-2 md:mt-[-30px]">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Supported by experts <br /> Teacher's community
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-span-2 mt-2 md:mt-[-30px]">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Report for teachers
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
              <div className="col-span-2 mt-2 md:mt-[-30px]">
                <div className="relative m-auto w-4/5 md:w-full">
                  <p className="absolute left-5 top-[25%] text-18">
                    • Holding virtual meetings and webinar
                  </p>
                  <img src={AimImg} alt="aim" />
                </div>
              </div>
            </div>
            <div className="text-left mt-[100px]" style={bg2Style}>
              Learning and how to learn are issues that are ignored in
              centralized educational systems. The limitation of information,
              the orientation of the learning process, and the psychological
              damage to students are among the disasters of the current
              centralized education systems, in bm learn, the main focus is on
              the way of learning. We provide information to our users without
              personal judgment and in the direction of helping personal and
              social development. Business investment and development, futurism,
              blockchain and cryptocurrency, ai, and all kinds of practical
              information on the internet and blockchain are totally covered in
              bm learn.
            </div>
          </div>
        </div>
        <div className="com-content">
          <BMblog scroll={scrollH} />
        </div>
        <div className="com-content">
          <Collaborate scroll={scrollH} />
        </div>
      </div>
    </Layout>
  );
};

export default BMlearn;

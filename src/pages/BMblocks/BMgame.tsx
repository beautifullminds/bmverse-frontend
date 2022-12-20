import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";
import Footer from "components/Footer";

import Space from "assets/imgs/game/space.png";
import Stones from "assets/imgs/game/stones.png";
import Abstract from "assets/imgs/game/abstract.png";
import Cons from "assets/imgs/game/cons.png";

interface BMgameProps {}

const BMgame: React.FC<BMgameProps> = () => {
  const layoutView = useRef(null);
  const [scrollH, setScrollH] = useState(-1);

  useEffect(() => {
    setScrollH(0);
    const onScroll = () => setScrollH(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout ref={layoutView} scroll={scrollH}>
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="content text-center">
            <h2 className="text-51 font-bold">BM GAME</h2>
            <p className="text-26 font-semibold">
              BMVerse™ The First Global Web3 Community For Game designer
              Professionals
            </p>
            <div className="mt-[30px] grid md:grid-cols-2 grid-cols-1 gap-3">
              <div
                className={`md:mt-[150px] mt-2 lg:left-[-1000px] relative ${
                  scrollH >= 0 ? "transition-origin" : ""
                }`}
              >
                <h4 className="text-23 font-bold">GAMIFICATION</h4>
                <div className="text-18 border p-2 rounded-[18px] text-left">
                  Among all the projects working in the rarity field, the one
                  that focuses more on the rare subject can be more special and
                  rarer than one spends time producing rare products. When a
                  distinguished part of a project is focused on the subject, it
                  would lead to project strength.
                </div>
              </div>
              <div
                className={`lg:left-[1000px] relative ${
                  scrollH >= 0 ? "transition-origin" : ""
                }`}
              >
                <img src={Space} alt="space" />
              </div>
            </div>
            <p className="text-26 font-semibold mt-[40px] mb-2">
              Everything is ready for any game development team here.
            </p>
            <div
              className={`md:flex rounded-[120px] bg-[rgba(0,0,0,0.5)] py-[60px] px-4 md:px-[60px] shadow-[0px_10px_0px_rgba(0,0,0,0.2)] lg:top-[1000px] relative ${
                scrollH > 240 ? "transition-origin" : ""
              }`}
            >
              <div>
                <img src={Stones} alt="stone" />
              </div>
              <div className="text-left ml-6 mt-[50px] text-26 font-medium">
                <span>
                  Amazing stories, game characters, and many exciting in-game
                  items are all prepared for any professional video game
                  development team in the blockchain space.
                </span>
              </div>
            </div>
            <img className="mx-auto my-[40px]" src={Abstract} alt="abstract" />
            <div
              className="font-semibold text-21 m-auto"
              style={{ maxWidth: "880px" }}
            >
              The theory of the savior generation, which directly refers to all
              the netizens and is called the generation Z as a provider for the
              growth of the alpha generation and their guide, has focused
              totally on game development, which apart from entertainment and
              creating an exciting atmosphere, seeks to make It as a platform to
              take creativity and reaching 100% of human abilities.
              <br />
              The first step, to take so, is to dominate decentralization in a
              radical way on the Alpha generation. Game making is our first
              action by which We will show the alpha generation that man is a
              creator And not just a consumer.
            </div>
            <div
              className={`lg:left-[1000px] relative ${
                scrollH > 1040 ? "transition-origin" : ""
              }`}
            >
              <img className="mx-auto my-[40px]" src={Cons} alt="cons" />
            </div>
            <div className="font-semibold text-34">
              Generations move one after another toward evolution
            </div>
            <div
              className="font-semibold text-19 rounded-[18px] p-4 m-auto shadow-[-7px_7px_0px_rgba(0,0,0,0.1)]"
              style={{ maxWidth: "880px", background: "rgba(0,0,0,0.2)" }}
            >
              This evolution needs a platform that each generation takes from
              the previous generation. We explained in detail about the
              generation of the Savior and how it was formed in an article, and
              it is mentioned that the alpha generation needs a decentralized
              platform to implement social justice. The task of providing the
              prerequisites and teaching the Alpha generation to benefit from
              all the potentials of a decentralized platform is the
              responsibility of the generation Z. Therefore, generation Z can be
              called the prerequisites’ provider, and generation Alpha can be
              called the generation of the Saviors and residents of a
              justice-oriented society in which %100 of people’s abilities are
              used.
            </div>
          </div>
        </div>
        <div className="com-content">
          <BMblog scroll={scrollH} />
        </div>
        <div className="com-content">
          <Collaborate scroll={scrollH} />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default BMgame;

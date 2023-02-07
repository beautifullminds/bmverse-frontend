import React, { useRef } from "react";
import Layout from "components/Layout";

import LinkedinIcon from "assets/imgs/landing/linkedin.png";
import TwitterIcon from "assets/imgs/landing/twitter.png";
import YoutubeIcon from "assets/imgs/landing/youtube.png";
import MediumIcon from "assets/imgs/landing/medium.png";

const contentStyle = {
  maxWidth: "1360px",
  minHeight: "700px",
  backgroundImage: `url(${require("assets/imgs/landing/bg.png")}`,
  margin: "auto"
};

interface BMlandingProps {}

const BMlanding: React.FC<BMlandingProps> = () => {
  const layoutView = useRef(null);

  return (
    <Layout ref={layoutView}>
      <div className="px-5 bg-dark min-h-[100vh] pb-[50px] pt-[120px]">
        <div
          style={contentStyle}
          className="
            text-center 
            rounded-[50px] 
            bg-100 
            w-3/4 
            shadow-[0px_0px_30px_rgba(255,255,255,0.2)] 
            relative 
            p-[30px_10px_150px] 
            md:p-[30px_60px_140px]"
        >
          <div className="md:flex">
            <div className="md:w-2/5 flex">
              <video
                className="m-auto rounded-[20px] content-justify"
                loop
                autoPlay
                muted
                style={{ mixBlendMode: "screen" }}
              >
                <source
                  src={require("assets/imgs/landing/video.webm")}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="md:w-3/5 text-left">
              <div className="text-25 md:text-34 font-bold tracking-wide mt-[30px] mb-3">
                BMverse "Beautifull Minds Foundation"
              </div>
              <div className="text-19 md:text-24 font-bold tracking-standard break-all">
                The decentralized platforms provider
              </div>
              <div className="text-19 md:text-24 font-bold tracking-standard break-all">
                Generation ALPHA Prerequisites in #WEB3
              </div>
              <div className="md:grid grid-cols-3 gap-[50px] mt-[60px]">
                <div className="rounded-[20px] border-2 border-white p-3 mb-5">
                  <div className="text-27 font-bold">Community</div>
                  <p className="text-18 font-bold">Development Capability</p>
                  <div className="text-12 font-bold mt-3">
                    The First Global Web3 Community For Designer Professionals.
                    Holders gain access to a global community consisting of the
                    most progressive individuals within the Game & Design
                    industry.
                  </div>
                </div>
                <div className="rounded-[20px] border-2 border-white p-3 mb-5">
                  <div className="text-27 font-bold">Discover</div>
                  <p className="text-18 font-bold">unique Senses</p>
                  <div className="text-12 font-bold mt-3">
                    Relying on the data obtained from the analysis of the
                    frequencies produced and received by the brain, we realized
                    that it is possible to provide gamers with the most
                    realistic sense of a virtual world . . .
                  </div>
                </div>
                <div className="rounded-[20px] border-2 border-white p-3 mb-5">
                  <div className="text-27 font-bold">Next-Gen of</div>
                  <p className="text-18 font-bold">
                    Interactive metaverse games
                  </p>
                  <div className="text-12 font-bold mt-3">
                    Man, innately, is a creator, enters the world, uses the
                    creation of others, grows, evolves, and provides what the
                    next generation needs.
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <a
                  href={`/#/bmgame`}
                  className="px-4 pt-1 pb-4 float-right mr-[30px] bg-100 text-20 font-semibold"
                  style={{
                    backgroundImage: `url(${require("assets/imgs/landing/start.png")}`
                  }}
                >
                  Start of The Journey
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[20px]">
            <a
              href="https://www.linkedin.com/company/bmverse"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedinIcon}
                alt="linkedinicon"
                className="inline mx-2 w-[45px]"
              />
            </a>
            <a
              href="https://twitter.com/bmverseio"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TwitterIcon}
                alt="twittericon"
                className="inline mx-2 w-[45px]"
              />
            </a>
            <a
              href="https://www.youtube.com/@Quantelium"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={YoutubeIcon}
                alt="youtubeicon"
                className="inline mx-2 w-[45px]"
              />
            </a>
            <a
              href="https://bmverse.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={MediumIcon}
                alt="mediumicon"
                className="inline mx-2 w-[45px] p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BMlanding;

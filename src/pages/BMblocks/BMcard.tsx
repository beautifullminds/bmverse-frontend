import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";

interface BMcardProps {}

const BMcard: React.FC<BMcardProps> = () => {
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
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="content text-center" style={{ minHeight: "3000px" }}>
            <h2 className="text-46 md:text-64 font-bold">BM CARD</h2>
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

export default BMcard;

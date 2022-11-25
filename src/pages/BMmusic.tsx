import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/BMblog";
import Collaborate from "components/Collaborate";

interface BMmusicProps {}

const BMmusic: React.FC<BMmusicProps> = () => {
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
        <div className="content text-center" style={{ minHeight: "3000px" }}>
          <h2 className="text-46 md:text-64 font-bold">BM MUSIC</h2>
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

export default BMmusic;

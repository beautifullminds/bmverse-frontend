import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollTopBtn from "./ScrollTopBtn";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="footer">
      <div className="bottom_footer">
        <div className="footer_div_1">
          <h3>
            Copyright {new Date().getFullYear()} — Designed and Developed by{" "}
            <span className="footer_bmverse">
              <a href="/">BMverse</a>
            </span>
          </h3>
        </div>
        <div className="footer_div_2">
          <a href="https://github.com/beautifullminds">Github</a>
          <a href="/">Discord Commuinity </a>
          <a href="/">Site map</a>
          <Link to="/bmllabs">Collab</Link>
          <Link to="/bmp">Privacy Policy</Link>
        </div>
      </div>
      <ScrollTopBtn />
    </section>
  );
};

export default Footer;

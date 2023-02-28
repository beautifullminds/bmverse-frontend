import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
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
    </section>
  );
};

export default Footer;

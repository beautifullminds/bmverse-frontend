import configs from "configs";
import line from "assets/imgs/galaxy/Line.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="footer">
      <form id="formal">
        <div className="line text-center">
          <img src={line} className="inline" alt="line" />
        </div>
        <div className="footer_heading">
          <h1>Contact Us</h1>
        </div>
        <div className="input_div">
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Your Name*"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email*"
            required
          />
        </div>
        <div className="input_div">
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Your Phone"
          />
          <input type="text" id="topic" name="topic" placeholder="Topic" />
        </div>

        <div className="text_area_div">
          <textarea
            id="message"
            name="message"
            rows={13}
            placeholder="Message"
          />
        </div>
      </form>
      <div className="footer_btn">
        <button type="submit" form="formal" value="Submit">
          Send Message
        </button>
      </div>
      <div className="bottom_footer">
        <div className="footer_div_1">
          <h3>
            Copyright 2022 — Designed and Developed by{" "}
            <span className="footer_bmverse">
              <a href={`/${configs.BASE_URL}`}>BMverse</a>
            </span>
          </h3>
        </div>
        <div className="footer_div_2">
          <a href="https://github.com/bmverse">Github</a>
          <a href={`/${configs.BASE_URL}`}>Discord Commuinity </a>
          <a href={`/${configs.BASE_URL}`}>Site map</a>
          <a href={`/${configs.BASE_URL}`}>Collab</a>
          <a href={`/${configs.BASE_URL}`}>Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

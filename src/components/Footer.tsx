import { AnimationOnScroll } from "react-animation-on-scroll";
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
          <AnimationOnScroll animateIn="flipInY">
            <h1>Contact Us</h1>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="bounceInLeft">
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
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="bounceInRight">
          <div className="input_div">
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Your Phone"
            />
            <input type="text" id="topic" name="topic" placeholder="Topic" />
          </div>
        </AnimationOnScroll>
        <div className="text_area_div">
          <AnimationOnScroll animateIn="fadeIn">
            <textarea
              id="message"
              name="message"
              rows={13}
              placeholder="Message"
            />
          </AnimationOnScroll>
        </div>
      </form>
      <div className="footer_btn">
        <AnimationOnScroll animateIn="flipInX">
          <button type="submit" form="formal" value="Submit">
            Send Message
          </button>
        </AnimationOnScroll>
      </div>
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
          <a href="/">Collab</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

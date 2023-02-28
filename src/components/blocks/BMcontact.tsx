import { AnimationOnScroll } from "react-animation-on-scroll";
// import line from "assets/imgs/galaxy/Line.png";

interface BMcontactProps {}

const BMcontact: React.FC<BMcontactProps> = () => {
  return (
    <section className="footer">
      <form id="formal">
        {/*<div className="line text-center">
          <img src={line} className="inline" alt="line" />
        </div>*/}
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
    </section>
  );
};

export default BMcontact;

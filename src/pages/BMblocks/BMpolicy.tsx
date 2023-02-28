import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "components/Layout";
import Menu from "components/Menu";
import Footer from "components/Footer";

interface BMpolicyProps {}

const bg2Style = {
  background: "rgba(0,0,0,0.5)",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0px 9px 0px rgba(0,0,0,0.2)"
};

const BMpolicy: React.FC<BMpolicyProps> = () => {
  const layoutView = useRef(null);

  return (
    <Layout ref={layoutView}>
      <div className="landing-container" style={{ minHeight: "auto" }}>
        <Menu />
        <div className="bm-content">
          <div className="content text-center">
            <h2 className="text-46 md:text-64 font-bold">Privacy Policy</h2>
            <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px]">
              The Beautiful Minds Foundation is committed to protecting the
              privacy of our donors, supporters, and website visitors. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal information.
            </div>
            <h2 className="text-33 md:text-46 font-bold mt-[70px]">
              Collection of Information
            </h2>
            <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px]">
              We may collect personal information such as your name, email
              address, and phone number when you voluntarily provide it to us,
              such as when you make a donation, sign up for our newsletter, or
              contact us through our website. We may also collect information
              automatically when you visit our website, such as your IP address
              and browsing history.
            </div>
            <h2 className="text-33 md:text-46 font-bold mt-[70px]">
              Use of Information
            </h2>
            <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px] text-center mb-[30px]">
              We may use your personal information to:
            </div>
            <AnimationOnScroll animateIn="bounceInLeft">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[20px] md:gap-[50px]">
                <div
                  className="text-19 md:text-24 font-regular w-full text-left mt-2 text-center"
                  style={bg2Style}
                >
                  Process donations and send tax receipts
                </div>
                <div
                  className="text-19 md:text-24 font-regular w-full text-left mt-2 text-center"
                  style={bg2Style}
                >
                  Communicate with you about our programs and events
                </div>
                <div
                  className="text-19 md:text-24 font-regular w-full text-left mt-2 text-center"
                  style={bg2Style}
                >
                  Respond to your inquiries
                </div>
                <div
                  className="text-19 md:text-24 font-regular w-full text-left mt-2 text-center"
                  style={bg2Style}
                >
                  Improve our website and services
                </div>
                <div
                  className="text-19 md:text-24 font-regular w-full text-left mt-2 text-center"
                  style={bg2Style}
                >
                  Comply with legal and regulatory requirements
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="bounceInRight">
              <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px] mt-[40px]">
                We may share your personal information with third-party service
                providers who help us with fundraising, marketing, and website
                hosting. We require these providers to keep your information
                confidential and use it only for the purposes for which we
                disclose it to them.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn">
              <div
                className="text-19 md:text-28 font-medium w-full text-left mt-[40px]"
                style={bg2Style}
              >
                We will not sell, trade, or rent your personal information to
                third parties for their marketing purposes.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="flipInY">
              <h2 className="text-33 md:text-46 font-bold mt-[70px]">
                Security of Information
              </h2>
              <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px] text-center">
                We take reasonable measures to protect your personal information
                from unauthorized access and use. However, please note that no
                data transmission over the internet can be guaranteed to be 100%
                secure, and we cannot guarantee the security of any information
                you transmit to us.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn">
              <h2 className="text-33 md:text-46 font-bold mt-[70px]">
                Links to Other Websites
              </h2>
              <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px] text-center">
                Our website may contain links to other websites that are not
                operated by us. We are not responsible for the privacy practices
                of these websites and encourage you to review their privacy
                policies.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn">
              <h2 className="text-33 md:text-46 font-bold mt-[70px]">
                Updates to Privacy Policy
              </h2>
              <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px] text-center">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will post the
                updated policy on our website and notify you of any material
                changes.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="flipInX">
              <h2 className="text-33 md:text-46 font-bold mt-[70px]">
                Contact Us
              </h2>
              <div className="uppercase text-24 font-semibold break-all pt-4 text-left [word-spacing:7px] text-center">
                If you have any questions about this Privacy Policy or our
                privacy practices, <br />
                please contact us at
                <a
                  href="/"
                  style={{ color: "#2c899f", textDecoration: "underline" }}
                  className="pl-3"
                >
                  privacy@beautifulmindsfoundation.org
                </a>
                .
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default BMpolicy;

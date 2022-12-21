import LinkedinIcon from "assets/imgs/landing/linkedin.png";
import TwitterIcon from "assets/imgs/landing/twitter.png";
import YoutubeIcon from "assets/imgs/landing/youtube.png";
import MediumIcon from "assets/imgs/landing/medium.png";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <section className="sidebar">
      <div className="sideslide_div">
        <h1>Follow Us On:</h1>
        <a
          href="https://twitter.com/bmverseio"
          target="_blank"
          rel="noreferrer"
        >
          <img src={TwitterIcon} alt="twitter" />
        </a>
        <a
          href="https://www.linkedin.com/company/bmverse"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedinIcon} alt="linkedin" />
        </a>
        <a
          href="https://www.youtube.com/@Quantelium"
          target="_blank"
          rel="noreferrer"
        >
          <img src={YoutubeIcon} alt="youtube" />
        </a>
        <a href="https://bmverse.medium.com/" target="_blank" rel="noreferrer">
          <img src={MediumIcon} alt="medium" />
        </a>
      </div>
    </section>
  );
};
export default Sidebar;

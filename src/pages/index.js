import * as React from "react";

// Components
import Header from "../components/Header";
import { Link } from "gatsby";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import SplitTextAnimation from "../components/SplitText";
import { StaticImage } from "gatsby-plugin-image";

// import LandingImage from "./images/photo_of_minesio1.jpg"
// Styles
import "../styles/global.scss";
import "../styles/index.scss";

// Content
// import { articles } from "../data/blog";
import Avatar from "../components/Avatar";
import { State } from "../components/Layout";
import ScrambleText from "../components/ScrambleText";
// import headshot from "../images/photo_of_minesio_4.jpg";


// Whatsapp, Facebook, Linkedin

const IndexPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const avatarRef = React.useRef(null);
  const { theme, onThemeChange } = React.useContext(State);

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const date = new Date();

  let day = weekdays[date.getDay()];

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1500);
  }, []);

  return (
    <>
      <Cursor />
      <div className="home overflow-hidden">
        <Loader isOpened={isOpened} duration={1} />
        <Header hideShortcut onThemeChange={onThemeChange} theme={theme} />
        <main className="overflow-hidden">
          <div className="avatar-section flex justify-center">
            {/* Trying to show centered image */}
            {/* <Avatar theme={theme} /> */}
            <StaticImage className="-bottom-4 md:bottom-0" src="../images/photo_of_minesio3.png" width={600} />
          </div>
          <div className="w-[90svw] banner-holder z-50 pt-[100px] sm:pointer-events-none fixed flex justify-center items-center">
            <h1 className="banner-title flex text-[var(--tw-text-gray-primary)] flex-col items-end h-full text-right font-bold w-[300px] flex-shrink-0">
              <ScrambleText
                text="Minesio"
                className="scramble-text min-w-[400px]"
                duration={3}
                placeholder="."
              />

              <ScrambleText
                text="Antonio"
                className="scramble-text min-w-[400px]"
                duration={3}
                placeholder="."
              />
            </h1>
            <span className="w-[420px]"> </span>
            <div className="banner-description w-[450px] mt-[0px] text-left 2xl:mt-[-30px] flex justify-end flex-col pl-[80px] items-start">
              <p className="mb-4 sm:mb-7">
                {/* A{" "} */}
                {/* <strong className="text-[var(--tw-text-gray-primary)] font-bold">
                  <ScrambleText
                    text="Humano que resolve problemas visuais,"
                    className="scramble-text inline-block"
                    duration={2}
                    placeholder="."
                  />
                </strong>{" "} */}
                A human who solves visual problems by adding personality and value to brands and businesses.
                {/* having fun crafting digital experiences */}
              </p>
              <Shortcut text="to start" />
            </div>
          </div>

          {/* <Link
            to="/blog"
            title="soon"
            className="blog-ticker-title  text-[var(--tw-text-gray-secondary)] fixed z-[100] left-[20px] sm:text-[18px] text-[14px]"
          >
            <ScrambleText
              text={`Latest posts ↓`}
              className="scramble-text"
              duration={2}
            />
          </Link> */}
          <p className="fixed z-[100] sm:text-[18px] text-left text-underline sm:bottom-[40px] text-[14px] left-[20px] text-[var(--tw-text-gray-secondary)] bottom-[65px]">
            <ScrambleText
              text="Weekday"
              className="scramble-text"
              duration={3.5}
            />
            <span className="underline cursor-pointer">
              <strong>
                <ScrambleText
                  text={day}
                  className="scramble-text"
                  duration={3.9}
                />
              </strong>
            </span>
          </p>
          <p className="fixed z-[100] sm:text-[18px] text-right text-underline sm:bottom-[40px] text-[14px] right-[20px] text-[var(--tw-text-gray-secondary)] bottom-[65px]">
            <ScrambleText
              text={`Want to hire me?`}
              className="scramble-text"
              duration={2}
            />
            <a className="underline " href="mailto:info@minesioantonio.com">
              <ScrambleText
                text={`info@minesioantonio.com`}
                className="scramble-text"
                duration={2}
              />
            </a>
          </p>
          {/* <div className="blog-ticker">
            <div className="blog-ticker-wrapper">
              {articles
                .flatMap((yearGroup) => yearGroup.posts)
                .filter((post) => post.active)
                .reverse()
                .map((post, index) => {
                  return (
                    <a
                      key={`${post.id}-${index}`}
                      href={post.link}
                      disabled={!post.active}
                      className={`blog-ticker-item relative text-[var(--tw-text-gray-secondary)] bg-[var(--bg-primary)] border-[1px] border-[var(--border-primary)] hover:border-[var(--border-primary)] ${post.active
                        ? ""
                        : "-link-blocked cursor-not-allowed pointer-events-none"
                        }`}
                      title={post.active ? "Read now" : "Coming soon"}
                    >
                      <span className="emoji">{post.emoji}</span>
                      {!post.active ? (
                        <span className="absolute top-0 right-0 bg-white text-black px-2 py-1 font-bold text-xs">
                          soon
                        </span>
                      ) : null}
                      <h3>{post.title} -&gt;</h3>
                    </a>
                  );
                })}
            </div>
          </div> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>minesioantonio</title>;

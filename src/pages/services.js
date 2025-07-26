import React, { useEffect, useState, useContext } from "react";
import Scene from "../components/Scene";
import Projects from "../components/Projects";
import Lenis from 'lenis'
// import classNames from "classnames";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
// import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
// import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Files
// import minesioantonioCV from "../files/minesio-antonio-resume.pdf";

// Context
import { State } from "../components/Layout";

// Data
import {
    bioDescription,
    careerPath,
    academyPath,
    // openSourcePath,
    // volunteeringPath,
    // hackingPath,
} from "../data";

// Images
// import headshot from "../images/headshot.jpg";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";
import Headshot from "../components/Headshot";

const panelMap = (index) => {
    const map = {
        0: (
            <ol className="career-path">
                {/* <br />
        <div className="border-l-2 border-[var(--border-secondary)] pl-4">
          Check out my{" "}
          <a
            className="underline text-[var(--tw-text-gray-primary)] font-bold"
            href="https://www.linkedin.com/in/cesarolvr/#experience"
          >
            LinkedIn experience section
          </a>{" "}
          for more details
        </div> */}
                {careerPath.map(({ role, details, description }, index) => {
                    return (
                        <li key={index} className="about-career-experience">
                            <h4 className="role">{role}</h4>
                            <br />
                            <h5 className="infos">{details}</h5>
                            <p className="description">{description}</p>
                        </li>
                    );
                })}
            </ol>
        ),
        1: (
            <ol className="career-path -academic">
                {academyPath.map(({ role, details }, index) => {
                    return (
                        <li key={index} className="about-career-experience">
                            <h4 className="role">{role}</h4>
                            <br />
                            <h5 className="infos">{details}</h5>
                        </li>
                    );
                })}
            </ol>
        )
    };

    return map[index];
};

const Services = () => {
    const [activePanel, setActivePanel] = useState(0);
    const { setCopied } = useContext(State);

    const copyText = () => {
        navigator.clipboard.writeText(bioDescription).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }, console.log);
    };

    const [isOpened, setIsOpened] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsOpened(false);
        }, 800);
    }, []);


    const [activeMenu, setActiveMenu] = useState(null)
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const isMobile =
        typeof window !== "undefined" ? window.innerWidth < 1440 : true;

    return (
        <>
            <Cursor />

            <div className="about">
                <Loader isOpened={isOpened} duration={0.5} />
                <Header goBackToHome={true} disableScramble={true} />
                <main>
                    <div className="h-[50vh]"></div>
                    <Projects setActiveMenu={setActiveMenu} />
                    <Scene activeMenu={activeMenu} />
                    <div className="h-[50vh]"></div>
                </main>
            </div>
        </>
    );
};

export default Services;

export const Head = () => <title>Services | minesioantonio</title>;

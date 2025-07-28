import React, { useEffect, useState } from "react";
import Scene from "../components/Scene";
import Projects from "../components/Projects";
import Lenis from 'lenis'
// import classNames from "classnames";

// Components
import Header from "../components/Header";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Data
import {
    careerPath,
    academyPath,
} from "../data";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";

const panelMap = (index) => {
    const map = {
        0: (
            <ol className="career-path">
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

    return (
        <div>
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
        </div>
    );
};

export default Services;

export const Head = () => <title>Services | minesioantonio</title>;

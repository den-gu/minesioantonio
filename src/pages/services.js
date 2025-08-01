import React, { useEffect, useState } from "react";
import Scene from "../components/Scene";
import Projects from "../components/Projects";
import Lenis from 'lenis'
// import classNames from "classnames";

// Components
import Header from "../components/Header";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";

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
                    <div className="hidden md:block h-[50vh]"></div>
                    <Projects
                    // setActiveMenu={setActiveMenu}
                    />
                    {/* <Scene activeMenu={activeMenu} /> */}
                    {/* <div className="h-[50vh]"></div> */}
                </main>
            </div>
        </div>
    );
};

export default Services;

export const Head = () => <title>Services | minesioantonio</title>;

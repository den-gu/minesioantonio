'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

import { Link } from "gatsby";
import ScrambleText from "../components/ScrambleText";
import Header from "../components/Header";
import Loader from "../components/Loader";
import '../styles/global.scss'
import '../styles/work.scss'

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
]

const Work = () => {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [isOpened, setIsOpened] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsOpened(false);
        }, 800);
    }, []);
    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className='about'>

            <Loader isOpened={isOpened} duration={0.5} />
            <Header goBackToHome={true} disableScramble={true} />
            <div>
                {/* <div className="spacer"></div> */}
                <div ref={gallery} className="gallery">
                    <Column images={[images[0], images[1], images[2]]} y={y} />
                    <Column images={[images[3], images[4], images[5]]} y={y2} />
                    <Column images={[images[6], images[7], images[8]]} y={y3} />
                    <Column images={[images[9], images[10], images[11]]} y={y4} />
                </div>
                <div className="spacer flex justify-center items-center rounded-t-xl">
                    <Link to="https://www.behance.net/minesioantonio" className="sm:text-[18px] text-[14px] text-white underline" target='_blank'>
                        <>{`See my portfolio ->`}</>
                    </Link>
                </div>
            </div>
        </main>
    )
}

const Column = ({ images, y }) => {
    return (
        <motion.div
            className="column"
            style={{ y }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className="imageContainer">
                        <img
                            src={`/${src}`}
                            alt='image'
                        />
                    </div>
                })
            }
        </motion.div>
    )
}

export default Work;

export const Head = () => <title>Work | minesioantonio</title>;

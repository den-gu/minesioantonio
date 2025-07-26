import * as React from "react";

import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiAward } from "@react-icons/all-files/fi/FiAward";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Files
import minesioantonioCV from "../files/minesio-antonio-resume.pdf";

const bioDescription = `Sou um Humano que quer resolver problemas visuais, agregando
personalidade e valor às marcas e empresas, utilizando
ferramentas modernas faço o meu melhor para tornar os visuais
atrativos e duradouros.`;

const careerPath = [
  {
    role: "Gestor de Marketing | Designer Grafico",
    details: `Mapendzi | Maputo, Moçambique | 2023`,
  },
  {
    role: "Gestor de Marketing | Designer Grafico",
    details: `MY BUBU's | Maputo, Moçambique | 2023`,
  },
  {
    role: "Gestor de Marketing | Designer Grafico",
    details: `Pepsi co Mozambique | Maputo, Moçambique | 2018 -> 2019`,
  }
];

const academyPath = [
  {
    role: "INFORMÁTICA E TELECOMUNICAÇÕES",
    details: `IPET | Maputo, Moçambique | 2017 -> 2020`,
  },
  {
    role: "COMPUTER SCIENCE",
    details: `USTM | Maputo, Moçambique | 2014 -> 2016`,
  },
  // {
  //   role: "Summer Programm in Usability Engineering",
  //   details: `University of São Paulo (USP) | São Paulo, Brazil | 2017 -> 2018`,
  // },
  // {
  //   role: "Bachelor (BA) in Digital design",
  //   details: `Anhembi Morumbi University (UAM) | São Paulo, Brazil | 2016 -> 2019`,
  // },
  // {
  //   role: "Career and Technical Education (CTE) in Information Systems",
  //   details: `São Paulo State Technical School (ETEC) | São Paulo, Brazil | 2013 -> 2015`,
  // },
];

const openSourcePath = [
  {
    role: "My Github",
    link: `https://github.com/cesarolvr`,
  },
];

const volunteeringPath = [
  {
    role: "Community Builder",
    details: `Nerdzão | São Paulo, Brazil | 2017 -> 2018`,
    description: `- Contribute to create +15 of technology events/meetup in the town
    - Promoted +5 talks/meetup across the country`,
  },
  {
    role: "Teaching Assistant",
    details: `{reprograma} | São Paulo, Brazil | 2018`,
    description: `- Contributed as a teacher's assistant, clearing up some tech student issues about web development
    - +10 new developers (women) formed and inserted into the industry`,
  },
];

const hackingPath = [
  {
    role: "journeylog.app",
    details: `Habit tracker app | 2025`,
    description: `-> React, Next.js, Supabase, Deno, TailwindCSS, Serverless functions, Figma and Vercel`,
    link: `https://www.journeylog.app/`,
  },
  {
    role: "murphy.js",
    details: `A scroll based animation library | 2022`,
    description: `-> VanillaJS, Intersection Observer API, Web Animations API and Nextra`,
    link: `https://www.murphyjs.org/`,
  },
];

const quickActionList = [
  {
    text: "Copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: "https://minesioantonio.com",
  },
  {
    text: "Download CV",
    nick: "d",
    icon: <FiDownload />,
    target: minesioantonioCV,
  },
  {
    text: "Know my career",
    nick: "k",
    icon: <FiAward />,
    target: "https://www.linkedin.com/in/min%C3%A9sio-ant%C3%B3nio-002473127/",
  },
  {
    text: "See my portfolio",
    nick: "p",
    icon: <FaBehance />,
    target: "https://www.behance.net/minesioantonio",
  },
  {
    text: "Book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "https://meet.google.com/",
  },
  {
    text: "Send an email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:info@minesioantonio.com",
  },
  {
    text: "Chat on whatsapp",
    nick: "w",
    icon: <FaWhatsapp />,
    target: "https://wa.me/+258848982463",
  },
  {
    text: "Find me on facebook",
    nick: "f",
    icon: <FiFacebook />,
    target: "https://web.facebook.com/minesioantoniio/",
  },
  {
    text: "Follow me on instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: "https://www.instagram.com/minesio.antonio/",
  }
  // {
  //   text: "See my current readings",
  //   nick: "r",
  //   icon: <FiBook />,
  //   target: "https://goodreads.com/cesarolvr",
  // },
  // {
  //   text: "View source code",
  //   nick: "r",
  //   icon: <FiCoffee />,
  //   target: "https://github.com/cesarolvr/cesarolvr-www",
  // },
];

export {
  bioDescription,
  careerPath,
  academyPath,
  quickActionList,
  openSourcePath,
  volunteeringPath,
  hackingPath,
};

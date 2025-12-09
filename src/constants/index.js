import proj01 from "../assets/img/proj01.jpg";
import proj02 from "../assets/img/proj02.jpg";
import proj03 from "../assets/img/proj03.jpg";

export const headerNav = [
  {
    title: "about",
    url: "#about",
  },
  {
    title: "experience",
    url: "#exp",
  },
  {
    title: "projects",
    url: "#proj",
  },
  {
    title: "contact",
    url: "#footer",
  },
];

export const aboutText = {
  title: "Sejin Park",
  desc: ["I craft digital interfaces that combine visual clarity with practical engineering."
    ]
};

export const expText = [
  {
    title: "Freelance Graphic Designer",
    subtitle: "Freelance | 2024 - Present",
    desc: "Designed digital assets and branding visuals for small businesses. Produced print ready materials and created simple web pages using visual builder tools. Continued freelance work while transitioning into front end development.",
    tag: ["Visual Design", "Brand Assets", "Digital Production"],
    link: "/"
  },
  {
    title: "Software Engineer Fellow",
    subtitle: "General Assembly | Remote | 2025",
    desc: "Built responsive interfaces with React and JavaScript. Planned data structure with teammates and collaborated on full stack features across several projects.",
    tag: ["JavaScript", "React", "REST API"],
    link: "/"
  },
  {
    title: "Art Director",
    subtitle: "Hiddenspace, Inc. | Full-time | 2021 - 2024",
    desc: "Created brand systems and ecommerce visuals. Improved mobile UX and contributed to higher sales performance through product design and photography direction.",
    tag: ["Visual Design", "E-commerce", "Brand Systems", "UX Improvement"],
  },
  {
    title: "Founding Member / Designer",
    subtitle: "Le Conte Jewelry | 2021 - 2024",
    desc: "Developed the brand identity and directed online presence. Produced marketing content and oversaw digital engagement on platforms such as Pinterest.",
    tag: ["Brand Identity", "Photography", "Web Presence", "UX Contribution"],
  },
  {
    title: "Designer",
    subtitle: "SamsBeauty | 2017 - 2019",
    desc: "Collaborated with developers on ecommerce improvements, which sparked my early interest in user experience and front end development.",
    tag: ["Ecommerce", "UX Collaboration"]
  }
];


export const projText = [
  {
    num: "01",
    title: "FeastMode",
    subtitle: "Potluck planning app",
    desc: "Responsive interface built with React. Designed intuitive event flow and structured data for integration with a back end service.",
    img: proj01,
    code: "https://github.com/sejincp/feastmode",
    view: "https://feastmode-c7c27bc8f641.herokuapp.com/",
    tag: ["React", "JavaScript", "REST API"],
    name: "FeastMode",
  },
  {
    num: "02",
    title: "Moonwalkers",
    subtitle: "Collaborative steps counter",
    desc: "Built a single page interface and designed the visual system. Integrated front end and back end to track user progress and update dynamic UI elements.",
    img: proj02,
    code: "https://github.com/sejincp/moonwalkers",
    view: "https://moonwalkers-1b273cfa2b3e.herokuapp.com/",
    tag: ["React", "Node", "Express", "MongoDB"],
    name: "Moonwalkers",
  },
  {
    num: "03",
    title: "Dinnergram",
    subtitle: "Menu sharing and tagging app",
    desc: "Implemented CRUD features and designed a structured tagging system using a Mongoose schema. Built user flows for browsing and saving menus.",
    img: proj03,
    code: "https://github.com/sejincp/dinnergram",
    view: "https://dinnergram-23bc77080274.herokuapp.com/",
    tag: ["JavaScript", "Node", "Express", "MongoDB"],
    name: "Dinnergram",
  },
];

import emailIcon from './../assets/img/email.svg';
import githubIcon from './../assets/img/github.svg';
import linkedinIcon from './../assets/img/linkedin.svg';

export const icons = [
  { href: 'mailto:sejinparkstudio@gmail.com', src: emailIcon, alt: 'Email' },
  { href: 'https://github.com/sejinparkstudio', src: githubIcon, alt: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sejinpark-spark/', src: linkedinIcon, alt: 'LinkedIn' },
];
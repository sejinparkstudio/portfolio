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
  desc: ["I craft digital experiences where beauty meets usability."]
};

export const expText = [
  {
      title: "Software Engineer Fellow",
      subtitle: "General Assembly | Remote | 2025",
      desc: "Developed, designed, and collaborated on full-stack web applications as a Software Engineer Fellow at General Assembly. Built responsive and accessible user interfaces, planned data structures and ERDs, and integrated front-end with back-end systems across multiple projects.",
      tag: ["JavaScript", "React"],
      link: "/",
      badgeImage: "https://api.badgr.io/public/assertions/A_qP119XRZ2If0bM7_mvZw/image",
      badgeLink: "https://api.badgr.io/public/assertions/A_qP119XRZ2If0bM7_mvZw",
      badgeTitle: "Software Engineering Bootcamp",
      badgeAwardedDate: "May 4, 2025",
      badgeRecipient: "Sejin Park"
  },
  {
      title: "Art Director",
      subtitle: "Hiddenspace, Inc. | Full-time | 2021 - 2024",
      desc: "Redesigned, analyzed, and collaborated to enhance a Shopify e-commerce site’s performance and branding. Improved mobile UX, boosted sales by 30% annually, and ensured cohesive visual identity through packaging and photography direction.",
      tag: ["Adobe Creative Suite", "Microsoft Office"],
  },
  {
      title: "Founding Member",
      subtitle: "Le Conte Jewelry | 2021 - 2024",
      desc: "Led, developed, and promoted a design-focused jewelry brand by building its visual identity and online presence. Created cohesive branding, launched an e-commerce site, and drove engagement through high-impact marketing on platforms like Pinterest(450K+ monthly views).",
      tag: ["Shopify", "Photography"],
  },
];

export const projText = [
  {
      num: "01",
      title: "FeastMode - Potluck Planning App",
      subtitle: "Feb 2025",
      desc: "Coordinated event features and ensured smooth user flow for potluck event planning, Designed the UI focusing on simplicity, accessibility, and responsiveness, Planned the Event-Relationship Diagram (ERD) for efficient data structure and backend integration.",
      img: proj01,
      code: "https://github.com/sejincp/feastmode",
      view: "https://feastmode-c7c27bc8f641.herokuapp.com/",
      tag: ["Django", "Neon", "Python", "CSS"],
      name: "FeastMode - Potluck Planning App",
  },
  {
      num: "02",
      title: "Moonwalkers - Collaborative Steps Counting App",
      desc: "Developed a full-stack single-page application using MongoDB, Express, React, and Node.js. Devised the app’s visual identity, including logo, color palette, and favicon. Executed real-time step tracking and dynamic UI elements, including a growing moon representing user progress. Integrated front-end and back-end to manage user data and ensure seamless functionality.",
      img: proj02,
      code: "https://github.com/sejincp/moonwalkers",
      view: "https://moonwalkers-1b273cfa2b3e.herokuapp.com/",
      tag: ["JavaScript", "CSS", "MongoDB", "Express", "React", "Node.js"],
      name: "Moonwalkers - Collaborative Steps Counting App",
  },
  {
      num: "03",
      title: "Dinnergram: A Community-Based Meal Planning App",
      desc: "Built a full-stack web application using the MEN stack (MongoDB, Express, Node.js), Created intuitive user flows for browsing, saving, and sharing menus, Implemented a categorized tagging system using a structured Mongoose schema, enabling pill-style tags for quick content filtering.",
      img: proj03,
      code: "https://github.com/sejincp/dinnergram",
      view: "https://dinnergram-23bc77080274.herokuapp.com/",
      tag: ["JavaScript", "CSS", "MongoDB", "Express", "Node.js"],
      name: "Dinnergram: A Community-Based Meal Planning App",
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
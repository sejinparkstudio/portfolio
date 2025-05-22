import React from 'react'
import proj01 from "../assets/img/proj01.jpg";
import proj02 from "../assets/img/proj02.jpg";
import proj03 from "../assets/img/proj03.jpg";
const projText = [
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
]

const Projects = () => {

  return (
      <section id="proj">
        <div className="proj__inner">
          <div className="proj__title">
              Projects
          </div>
            <div className="proj__wrap">
              {projText.map((proj, key) => (
                  <article className={`proj__item p${key + 1}`} key={key}>
                      <span className="num">{proj.num}.</span>
                      <a href={proj.code} target="_blank" className="img" rel="noreferrer">
                          <img src={proj.img} alt={proj.name} />
                      </a>
                      <h3 className="title">{proj.title}</h3>
                      <p className="desc">{proj.desc}</p>
                      <a href={proj.view} target="_blank" className="site" rel="noreferrer">Github</a>
                  </article>
              ))}
            </div>
        </div>
      </section>
  );
};

export default Projects;
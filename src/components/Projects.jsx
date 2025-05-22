import React, { useEffect, useRef } from 'react';

import { projText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
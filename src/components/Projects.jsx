import React, { useEffect, useRef } from 'react';

import { projText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
      trigger: horizontal,
      start: "top 56px",
      end: () => "+=" + horizontal.offsetWidth,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      },
  });

  return () => {
      scrollTween.kill();
  };
}, []);

  return (
      <section id="proj" ref={horizontalRef}>
        <div className="proj__inner">
          <div className="proj__title">
              Projects
          </div>
            <div className="proj__wrap">
              {projText.map((proj, key) => (
                  <article className={`proj__item p${key + 1}`}
                  key={key}
                  ref={(el) => (sectionsRef.current[key] = el)}>
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
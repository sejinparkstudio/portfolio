import React from 'react';
import Projects from './Projects';

import { expText } from "../constants";

const Experience = () => {

  return (
    <section id="exp">
      <div className="exp__inner">
          <h2 className="exp__title">Experience</h2>
          <div className="exp__desc">
              {expText.map((exp, key) => (
                <div className="exp__container" key={key}>
                    <span>{key+1}</span>
                    <h3>{exp.title}</h3>
                    <h6>{exp.subtitle}</h6>
                    <p>{exp.desc}</p>
                    {exp.tag && (
                      <div className='exp__tags'>
                        {exp.tag.map((skill, i) => (
                          <span className='exp__tag' key={i}>{skill}</span>
                        ))}
                      </div>
                    )}
                    {exp.link && (
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="exp__button"
                      >
                        Projects
                      </a>
                    )}
                </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Experience;
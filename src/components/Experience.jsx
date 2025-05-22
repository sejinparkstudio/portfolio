import React from 'react'
import Projects from './Projects';

const expText = [
  {
    title: "Software Engineer Fellow",
    subtitle: "General Assembly | Remote | 2025",
    desc: "Developed, designed, and collaborated on full-stack web applications as a Software Engineer Fellow at General Assembly. Built responsive and accessible user interfaces, planned data structures and ERDs, and integrated front-end with back-end systems across multiple projects.",
    tag: ["JavaScript", "React"],
    link: "/"
  },
  {
    title: "Art Director",
    subtitle: "Hiddenspace, Inc. | Full-time | 2021 - 2024",
    desc: "Redesigned, analyzed, and collaborated to enhance a Shopify e-commerce site’s performance and branding. Improved mobile UX, boosted sales by 30% annually, and ensured cohesive visual identity through packaging and photography direction.",
  },
  {
    title: "Founding Member",
    subtitle: "Le Conte Jewelry | 2021 - 2024",
    desc: "Led, developed, and promoted a design-focused jewelry brand by building its visual identity and online presence. Created cohesive branding, launched an e-commerce site, and drove engagement through high-impact marketing on platforms like Pinterest(450K+ monthly views).",
  },
];

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
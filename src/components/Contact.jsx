import React from 'react'

const contactText = [
  {
      link: "https://github.com/sejincp",
      title: "Github",
  },
  {
      link: "mailto:sejincp.dev@gmail.com",
      title: "sejincp.dev@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__text">
                  <div className="text">
                      {contactText.map((contact, key) => (
                          <div key={key}>
                              <a
                                  href={contact.link}
                                  rel="noopener noreferrer"
                                  target="_blank"
                              >
                                  {contact.title}
                              </a>
                          </div>
                      ))}
                  </div>
                </div>
            </div>
        </section>
  )
}

export default Contact
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const about = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                {/* <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="Aboutimage" />
                    </div>
                </div> */}

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>6 Years Of Study</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small>3 companies i've worked at</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>15+ completed projects</small>
                        </article>
                    </div>

                    <p>
                        I design, build and maintain modern web applications with a strong focus on performance, reliability and clean engineering.

I hold a Master’s degree in Full-Stack Development and completed three years of apprenticeship at Apave SA, where I contributed to large-scale projects involving Operational Maintenance (MCO), CI/CD automation, REST APIs, database modeling and full application lifecycle improvements.

Passionate about technology and problem-solving, I enjoy crafting intuitive user interfaces, designing scalable backend architectures and automating workflows to enhance efficiency. I’m proficient in PHP/Symfony, React, SQL, Git, Jenkins, Docker and automation scripting (VBA, Google Apps Script).

Curious, detail-oriented and constantly learning, I love exploring new technologies and refining my craft. I’m currently seeking opportunities where I can contribute to impactful products and grow within a dynamic technical team.

                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default about
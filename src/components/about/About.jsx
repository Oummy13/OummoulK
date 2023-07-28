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
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="Aboutimage" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>4 Years Of Study</small>
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

                    <p>I design, build and publish projects of quality and reliability. Currently, I'm a web developer at Apave SA and student at Ecole PMN ( La Passerelle Des Métiers Du Numérique Paris Nanterre ) in web development.Passionate about IT and web development, I'm perfectly bilingual (Anglo-Saxon) and naturally curious. I like to constantly learn on my own and develop my skills. I move forward by setting goals to continuously improve.
                    My hobbies are travel, music and cinema.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default about
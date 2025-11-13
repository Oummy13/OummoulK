import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <div className="container services_container">

                <article className="service">
                    <div className="service_head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I design intuitive user flows, functional wireframes and modern user interfaces.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I build responsive, accessible and user-friendly frontend experiences.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I develop scalable components using JavaScript and React.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I ensure pixel-perfect rendering, clean layouts and cross-browser compatibility.</p>
                        </li>
                       

                    </ul>
                </article>


                <article className="service">
                    <div className="service_head">
                        <h3>Backend Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I create secure and reliable backend architectures with PHP & Symfony.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I build and integrate REST APIs and manage relational databases (MySQL).</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I handle data modeling, business logic and performance optimization.</p>
                        </li>
                         <li>
                            <BiCheck className="service_list-icon" />
                            <p>I debug, troubleshoot and maintain application stability in production.</p>
                        </li>
                        
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>DevOps & Automation</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I automate workflows using Jenkins CI/CD, GitLab CI/CD and scripting tools.</p>
                        </li>
                       
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I create automation scripts (VBA, Google Apps Script) to streamline processes.</p>
                        </li>
                         <li>
                            <BiCheck className="service_list-icon" />
                            <p>I manage version control workflows with Git, GitHub and GitLab.</p>
                        </li>
                         <li>
                            <BiCheck className="service_list-icon" />
                            <p>I support collaborative development, deployment reliability and system monitoring.</p>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
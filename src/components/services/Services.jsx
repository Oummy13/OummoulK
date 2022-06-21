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
                        <h3>UX / UI design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I determine the architecture of your website.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I design the user flows and wireframes.</p>
                        </li>

                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I design the user interface.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I create UX element interactions.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I build your user interface.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I develop your web pages.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I make your website responsive.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I create visual elements for your website</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I make sure web pages are optimized for best speed and scalability</p>
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
                            <p>I make your website interactive.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I build and manage your database.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I help arrange and store your data.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I troubleshoot and debug your website.</p>
                        </li>

                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
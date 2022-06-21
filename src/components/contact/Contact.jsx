import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n3e0pvm', 'template_xiq94da', form.current, 'xq6q5z8vNlVmp7Fzs')
        e.target.reset()
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineMail className="contact_option-icon" />
                        <h4>Email</h4>
                        <h5>oummoul.koulsouwi@gmail.com</h5>
                        <a href="mailto:oummoul.koulsouwi@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+33778379751</h5>
                        <a href="https://api.whatsapp.com/send?phone+33778379751" target="_blank">Send a message</a>
                    </article>
                    {/* <article className="contact_option">
                        <FiPhoneCall className="contact_option-icon" />
                        <h4>Telephone Number</h4>
                        <h5>+33602437316</h5>
                        <a href="">Call</a>
                    </article> */}
                </div>

                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button className="btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact
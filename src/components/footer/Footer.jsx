import React from 'react'
import './footer.css'

import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitch } from 'react-icons/fi'



const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">OUMMOUL</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.facebook.com/Oummyhamad"><FaFacebookF /></a>
                <a href=" https://instagram.com/oummy_13?igshid=OGQ5ZDc2ODk2ZA=="><FiInstagram /></a>
                <a href="https://www.twitch.com/oummy13"><FiTwitch /></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Oummy portfolio. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
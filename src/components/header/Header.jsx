import React from 'react'
import './header.css'
import CTA from './CTA';
// import ME from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';



const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h4>Welcome, I'm</h4>
                <h1>Oummoul Koulsouwi</h1>
                <h4 className="text-light">Full-Stack Developer | DevOps & Automation Enthusiast</h4>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    {/* <img src={ME} alt="me" /> */}
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
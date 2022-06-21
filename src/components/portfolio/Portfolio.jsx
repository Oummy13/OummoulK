import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'This is a portfolio item title',
        github: 'https://github.com/Oummy13/coffee-website',
        demo: 'https://site.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'This is a portfolio item title',
        github: 'https://github.com/Oummy13/nfactory-netron',
        demo: 'https://site.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'This is a portfolio item title',
        github: 'https://github.com/Oummy13/mario',
        demo: 'https://site.com/'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image"><img src={image} alt="title" /></div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} target="_blank" rel="noreferrer" className="btn">Github</a>
                                    {/* <a href={demo} target="_blank" rel="noreferrer" className="btn btn primary">Live Demo</a> */}
                                </div>
                            </article>
                        )
                    })
                }




            </div>
        </section>
    )
}

export default Portfolio
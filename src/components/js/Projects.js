import React from 'react'
import "./../sass/projects.scss";
import Project from './Project'
import amarokImg from "../../img/amarok.png";
import albumImg from "../../img/album.png";
import asteroidsImg from "../../img/asteroids.png";
import billingImg from "../../img/billing.png";
import mockupsImg from "../../img/mocups.png";
import borrowmeImg from "../../img/borrowme.png";
import portfolioImg from "../../img/portfolio.png";
import { Element } from 'react-scroll'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <header>
                    <p className="p--uppercase"><h1><span className="span--green span--h1">W</span>ybrane pROJEKTY</h1></p>
                </header>
                <div className="projects">
                    <Project
                        name="Strona gry amarok"
                        projectImg={amarokImg}
                        technologiesUsed={["Sass", "jQuery", "HTML5", "CSS3", "RWD"]}
                        hideButtons=""
                        linkCode="https://github.com/MarcinParda/AmarokPage"
                        linkLive="https://amarokgame.com/"
                    />
                    <Project
                        name="Aplikacja do rejestracji czasu pracy"
                        projectImg={billingImg}
                        technologiesUsed={["React", "Sass", "Bootstrap", "Axios"]}
                        hideButtons=""
                        linkCode="https://github.com/Billeniarsi/rejestracja-czasu-pracy"
                        linkLive="https://floating-atoll-06778.herokuapp.com/"
                    />
                    <Project
                        name="Asteroid Game"
                        projectImg={asteroidsImg}
                        technologiesUsed={["Javascript", "OOP", "Canvas"]}
                        hideButtons=""
                        linkCode="https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/asteroids-game"
                        linkLive="https://marcinparda.github.io/Frontend-Projects/JS/projects/asteroids-game/index.html"
                    />
                    <Project
                        name="Statyczna strona TweenMax"
                        projectImg={albumImg}
                        technologiesUsed={["TweenMax", "Javascript"]}
                        hideButtons=""
                        linkCode="https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/photo-album-landing-page"
                        linkLive="https://marcinparda.github.io/Frontend-Projects/JS/projects/photo-album-landing-page/index.html"
                    />
                    <Project
                        name="Mockupy"
                        projectImg={mockupsImg}
                        technologiesUsed={[]}
                        hideButtons="code"
                        linkLive="https://miro.com/app/board/o9J_kuO7wMY=/?moveToWidget=3074457347509396995&cot=5"
                    />
                    <Project
                        name="Portfolio"
                        projectImg={portfolioImg}
                        technologiesUsed={["React", "Sass", "HTML5", "BEM", "RWD"]}
                        hideButtons="live"
                        linkCode="https://github.com/MarcinParda/portfolio"
                    />
                    <Project
                        name="Projekt grupowy (w trakcie)"
                        projectImg={borrowmeImg}
                        technologiesUsed={["React Router", "Axios", "React native"]}
                        hideButtons="none"
                    />
                </div>
            </div>
            <Element name="about-me" className="element" ></Element>
        </section>
    )
}

export default Projects;
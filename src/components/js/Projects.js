import React from 'react'
import "./../sass/projects.scss";
import Project from './Project'
import amarokImg from "../../img/amarok.png";
import albumImg from "../../img/album.png";
import asteroidsImg from "../../img/asteroids.png";
import todolistImg from "../../img/todolist.png";
import mocupsImg from "../../img/mocups.png";
import borrowmeImg from "../../img/borrowme.png";

const Projects = () => {
    return (
        <section className="projects">
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
                    />
                    <Project
                        name="Simple TODO list"
                        projectImg={todolistImg}
                        technologiesUsed={["React"]}
                        hideButtons=""
                    />
                    <Project
                        name="Asteroid Game"
                        projectImg={asteroidsImg}
                        technologiesUsed={["Javascript", "OOP", "Canvas"]}
                        hideButtons=""
                    />
                    <Project
                        name="Statyczna strona TweenMax"
                        projectImg={albumImg}
                        technologiesUsed={["TweenMax", "Javascript"]}
                        hideButtons=""
                    />
                    <Project
                        name="Mocupy"
                        projectImg={mocupsImg}
                        technologiesUsed={[]}
                        hideButtons="code"
                    />
                    <Project
                        name="Portfolio"
                        projectImg={amarokImg}
                        technologiesUsed={["React", "Sass", "HTML5", "BEM", "RWD"]}
                        hideButtons="live"
                    />
                    <Project
                        name="Projekt grupowy (w trakcie)"
                        projectImg={borrowmeImg}
                        technologiesUsed={["React Router", "Axios", "React native"]}
                        hideButtons="none"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;
import React from 'react'
import "./../sass/navigation.scss";
import "./../sass/base.scss";
import { Link } from 'react-scroll'


const Navigation = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="name">
                    <p><h1><span className="span--green span--h1">M</span>arcin <span className="span--green span--h1">P</span>arda</h1></p>
                    <p className="p--gray p--light p--uppercase">Front-end developer</p>
                </div>

                <nav className="tablet">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marcinparda/" >
                        <button className="button__font-awesome">
                            <i className="fa fa-linkedin"></i>
                        </button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/MarcinParda/" >
                        <button className="button__font-awesome">
                            <i className="fa fa-github"></i>
                        </button>
                    </a>
                        <div className="buttons">
                            <Link to="projects" spy={true} smooth={true} duration={500} >
                                <button>Projekty</button>
                            </Link>
                            <Link to="about-me" spy={true} smooth={true} duration={500} >
                                <button>O mnie</button>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} duration={500} >
                                <button>Kontakt</button>
                            </Link>
                        </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;
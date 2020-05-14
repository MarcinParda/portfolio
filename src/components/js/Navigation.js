import React from 'react'
import "./../sass/navigation.scss";
import "./../sass/base.scss";

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
                            <button>Projekty</button>
                            <button>O mnie</button>
                            <button>Kontakt</button>
                        </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;
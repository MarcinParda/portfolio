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

                <nav>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-github"></i>
                    <button>Projekty</button>
                    <button>O mnie</button>
                    <button>Kontakt</button>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;
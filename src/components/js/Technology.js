import React from 'react'
import "./../sass/technology.scss";
import reactImg from "../../img/react.png";
import javascriptImg from "../../img/javascript.png";
import html5Img from "../../img/html5.png";
import css3Img from "../../img/css3.png";
import sassImg from "../../img/sass.png";
import gitImg from "../../img/git.png";
import oppImg from "../../img/opp.png";
import bemImg from "../../img/bem.png";
import vscodeImg from "../../img/vscode.png";
import figmaImg from "../../img/figma.png";
import githubImg from "../../img/github.png";
import gitlabImg from "../../img/gitlab.png";

const Technology = () => {
    return (
        <section className="technology">
            <div className="container">
                <header>
                    <p><span className="span--green">W</span>itaj na stronie mojego portfolio.</p>
                    <p>Poniżej znajdziesz informacje o moich projektach i o mnie.</p>
                </header>
                <article>
                    <p className="p--h1"><span className="span--green span--h1">P</span>racuję w:</p>
                    <div className="icons">
                        <div className="icon">
                            <img src={reactImg} alt="react.js"></img>
                            <p>React</p>
                        </div>
                        <div className="icon">
                            <img src={javascriptImg} alt="javascript"></img>
                            <p>Javascript</p>
                        </div>
                        <div className="icon">
                            <img src={html5Img} alt="html5"></img>
                            <p>HTML5</p>
                        </div>
                        <div className="icon">
                            <img src={css3Img} alt="css3"></img>
                            <p>CSS3</p>
                        </div>
                        <div className="icon">
                            <img src={sassImg} alt="sass"></img>
                            <p>SASS</p>
                        </div>
                        <div className="icon">
                            <img src={gitImg} alt="git"></img>
                            <p>Git</p>
                        </div>
                    </div>
                </article>
                <article>
                    <p className="p--h1"><span className="span--green span--h1">Z</span>nam:</p>
                    <div className="icons">
                        <div className="icon">
                            <img src={reactImg} alt="react native"></img>
                            <p>React Native</p>
                        </div>
                        <div className="icon">
                            <img src={oppImg} alt="opp"></img>
                            <p>OPP</p>
                        </div>
                        <div className="icon">
                            <img src={bemImg} alt="bem"></img>
                            <p>BEM</p>
                        </div>
                    </div>
                </article>
                <article>
                    <p className="p--h1"><span className="span--green span--h1">N</span>arzędzia, których używam:</p>
                    <div className="icons">
                        <div className="icon">
                            <img src={vscodeImg} alt="vscode.js"></img>
                            <p>VS Code</p>
                        </div>
                        <div className="icon">
                            <img src={reactImg} alt="react"></img>
                            <p>CRA</p>
                        </div>
                        <div className="icon">
                            <img src={githubImg} alt="github"></img>
                            <p>Github</p>
                        </div>
                        <div className="icon">
                            <img src={gitlabImg} alt="gitlab"></img>
                            <p>Gitlab</p>
                        </div>
                        <div className="icon">
                            <img src={figmaImg} alt="figma"></img>
                            <p>Figma</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Technology;
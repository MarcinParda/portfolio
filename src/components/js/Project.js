import React from 'react'
import "./../sass/projects.scss";
const Project = (props) => {
    const displayButtons = () => {
        if(props.hideButtons === "live")
            return <button><p className="p--uppercase">Kod</p></button>;
        if(props.hideButtons === "code")
            return <button><p className="p--uppercase">Live</p></button>;
        return (
            <div>
                <button><p className="p--uppercase">Live</p></button>
                <button><p className="p--uppercase">Kod</p></button>
            </div>
        )
        
    }
    return (
        <div className="project">
            <img src={props.projectImg} alt={props.name}></img>
            <p className="p--uppercase">{props.name}</p>
            <div className="buttons">
                {displayButtons()}
            </div>
            <div className="technologies">
                {props.technologiesUsed.map(technology => {
                    return (
                        <div className="technology-used">
                            <p className="p--uppercase">{technology}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Project;
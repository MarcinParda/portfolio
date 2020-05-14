import React from 'react'
import "./../sass/projects.scss";
const Project = (props) => {
    const displayButtons = () => {
        if(props.hideButtons === "live")
            return (
                <a target="_blank" rel="noopener noreferrer" href={props.linkCode} >
                    <button>
                        <p className="p--uppercase">Kod</p>
                    </button>
                </a>
            );
        if(props.hideButtons === "code")
            return (
                <a target="_blank" rel="noopener noreferrer" href={props.linkLive} >
                    <button>
                        <p className="p--uppercase">Live</p>
                    </button>
                </a>
            );
        if(props.hideButtons === "none")
            return;
        return (
            <div>
                <a target="_blank" rel="noopener noreferrer" href={props.linkLive} >
                    <button>
                        <p className="p--uppercase">Live</p>
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={props.linkCode} >
                    <button>
                        <p className="p--uppercase">Kod</p>
                    </button>
                </a>
            </div>
        )
        
    }
    return (
        <div className="project">
            <img src={props.projectImg} alt={props.name}></img>
            <p className="p--uppercase title">{props.name}</p>
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
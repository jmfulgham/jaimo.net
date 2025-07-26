import React, {useEffect, useState} from "react";
import "./styles.css"

const Projects = () => {
    const [githubData, setGithubData] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch('/api/data', {headers: {"Content-Type": "application/json"}})
            const projectList = await response.json();
            if(projectList.nodes.length > 0) {
                setGithubData(projectList.nodes)
            }
        })()
    }, [])

    return (<div className={"projects-parent"}>
        <h2>Recent Projects</h2>
        <div className={"projects-container"}>
            {githubData.map((data, i) => (
                <div className={"project"} key={i}>
                    <div className={"title-language"}>
                        <h3 className={"poppins-semibold"}><a href={data.url} target="_blank"
                                                              rel="noopener noreferrer">{data.name}</a></h3>
                    </div>
                    <div className={"project-description poppins-light"}><p>{data.description}</p></div>
                </div>
            ))}
        </div>
    </div>)
}

export default Projects;

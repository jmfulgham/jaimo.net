import React, {useEffect, useState} from "react";
import {getGithubData} from "../../data/githubRequest"
import "./styles.css"

const Projects = () => {
    const [githubData, setGithubData] = useState([])
    useEffect(() => {
        (async () => {
            const resp = await getGithubData()
            setGithubData(resp)
        })()
    }, [])

    return (<div className={"projects-parent"}>
        <h2>Recent Projects</h2>
        <div className={"projects-container"}>
            {githubData.map((data, i) => (
                <div className={"project"}>
                    <div className={"title-language"} key={i}>
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
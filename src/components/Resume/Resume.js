import React from "react";
import {resume} from "../../data/resume";
import "./styles.css"

const Resume = () => {
    return (<div className={"resume-container"}><h2>Resume</h2>
            {resume.map((job, i) => (<div className={"job"} key={i}>
                <div className={"job-dates"}>
                    <p className={"poppins-light"}>{job.startDate} - {job.endDate}</p>
                </div>
                <div className={"job-details"}>
                    <h3>{job.company}</h3>
                    <h4 className={"poppins-medium"}>{job.title}</h4>
                    <p className={"poppins-light"}>{job.synopsis}</p>
                </div>
            </div>))}
        </div>
    )
}

export default Resume;
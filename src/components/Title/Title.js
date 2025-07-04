import React from "react";
import "./styles.css"
import * as photo from "../../assets/LI Pic.jpg"
import {PiGithubLogoFill} from "react-icons/pi";
import {MdMail} from "react-icons/md";
import {ImLinkedin2} from "react-icons/im";
import { FaRegFilePdf } from "react-icons/fa6";

const Title = () => {
    return (<div className={"parent"}>
        <div className={"introduction"}>
            {/*<div className={"profile-picture"}><img src={photo} alt="JM Fulgham"/></div>*/}
            <div className={"name"}>
                <h1 className={"poppins-bold"}> Hi, I'm J.M. Fulgham</h1>
                <div className={"icons"}>
                    <a title="GitHub" href={"https://github.com/jmfulgham"}
                       target="_blank" rel="noopener noreferrer"><PiGithubLogoFill alt={"JM Fulgham Github"}/></a>
                    <a title={"Email Me"} href={"mailto:mo@jaimo.net"} target="_blank"
                       rel="noopener noreferrer"><MdMail alt={"JM Fulgham Email"}/></a>
                    <a title={"LinkedIn"} href={"https://linkedin.com/in/monetfulgham"} target="_blank"
                       rel="noopener noreferrer"><ImLinkedin2 alt={"JM Fulgham LinkedIn"}/></a>
                    <a title={"Resume"} href={"https://drive.google.com/file/d/1CJLOTnAhp1rDsQz7r9jlXW4qY3aCq0rq/view?usp=sharing"} target="_blank"
                       rel="noopener noreferrer"><FaRegFilePdf alt={"JM Fulgham Resume"}/></a>
                </div>
            </div>
        </div>
    </div>)
}

export default Title

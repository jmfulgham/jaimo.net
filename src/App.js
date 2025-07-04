import React from "react";
import "./App.css"
import Title from "./components/Title/Title";
import Overview from "./components/Overview/Overview";
import Divider from "./components/Divider/Divider";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

const App = () => {

    return (<div className={"App"}>
        <Title/>
        <Overview/>
        <Projects/>
        <Resume/>
        <Divider/>
    </div>);
}

export default App;

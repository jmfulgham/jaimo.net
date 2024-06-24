import React from "react";
import './App.css'
import Title from "./components/Title/Title";
import Overview from "./components/Overview/Overview";

const App = () => {
  return (<div className={'App'}>
    <Title/>
    <Overview/>
  </div>);
}

export default App;

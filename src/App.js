import React from "react";
import './App.css'
import Title from "./components/Title/Title";
import Overview from "./components/Overview/Overview";
import Divider from "./components/Divider/Divider";

const App = () => {
  return (<div className={'App'}>
    <Title/>
    <Overview/>
    <Divider/>

  {/*  Things I've Built*/}
  {/*  <Resume/>*/}
  </div>);
}

export default App;

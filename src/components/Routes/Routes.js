import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

export default class Routes extends Component{
    render(){
        return <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact-me" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Welcome} />
          </Switch>
    }

}
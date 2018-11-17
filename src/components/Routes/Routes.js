import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';

export default class Routes extends Component{
    render(){
        return <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Welcome} />
          </Switch>
    }

}
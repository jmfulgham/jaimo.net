import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Graphics from '../Graphics/Graphics';
import Media from "../Media/Media";


export default class Routes extends Component{
    render(){
        return <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact-me" component={Contact} />
            <Route path="/graphics" component={Graphics} />
            <Route path="/media" component={Media} />
            <Route path="/" component={Welcome} />
          </Switch>
    }

}
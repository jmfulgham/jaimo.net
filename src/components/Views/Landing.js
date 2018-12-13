import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import './form.css';

export default class Landing extends Component{
    constructor(props){
        super(props)
        this.state= [
            {
            firstName: null,
            email: null   
            }
        ]
    }

    render(){
        return(
            <div className="landingForm"> 
               <Typography variant="title">
            For more information about courses or to request a consultation, fill out the form below.
            </Typography>
            <form>
             
            <input
            name= "first-name"
            placeholder="First Name"
            // onChange={this.handleChange}
            />
           
            <input 
            name = "email"
            placeholder="Email"
            // onChange={this.handleChange}
            />
             <input
            type= "submit"
            name="Submit"/>
            </form>
            </div>
        )
    }
}
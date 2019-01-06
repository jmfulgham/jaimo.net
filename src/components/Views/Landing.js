import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import './form.css';
require("typeface-vidaloka");

const style = {
    container: {
        padding: "1rem"
    },

    none: {
        display: "none"
    },
    subhead: {
         fontFamily: "Vidaloka"
    },

    email: {
        color: 'primary'
    }
}
export default class Landing extends Component{
    constructor(props){
        super(props)
        this.state= {
            firstName: null,
            email: null 
        }
    }



    render(){
        return(
            <div className="landingForm"> 
               <Typography variant="headline">
                   For class announcements, freebies, and other tutorials, subscribe below.
            </Typography>
                <Typography variant="subheading">
                    To work with me, contact <a href="mailto:mo@jaimo.net?Subject=Hi Mo, let's work together!" style={style.email}>mo@jaimo.net</a>
                </Typography>
                    <div id="mc_embed_signup">
                        <form action="https://jaimo.us7.list-manage.com/subscribe/post?u=761012afcaf3bda37d7881e87&amp;id=bb54c439c5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" validate>
                            <div id="mc_embed_signup_scroll">

                                <div className="mc-field-group">
                                    <Typography style={style.subhead} variant='subheading' color="primary"><label htmlFor="mce-FNAME">First Name* </label></Typography>
                                    <input type="text" name="FNAME" id="mce-FNAME" required ></input>
                                </div>
                                <div>
                                    <Typography style={style.subhead} variant='subheading' color="primary"><label htmlFor="mce-EMAIL">Email Address*
                                    </label></Typography>
                                    <input type="email" name="EMAIL"  id="mce-EMAIL" required></input>
                                </div>
                                <div className="indicates-required"><Typography variant="caption">* indicates required</Typography></div>
                                </div>	<div id="mce-responses" >
                                <div className="response" id="mce-error-response" style={style.none}></div>
                                <div className="response" id="mce-success-response" style={style.none}></div>
                            </div>
                            <div aria-hidden="true" style={style.none}><input type="text" name="b_761012afcaf3bda37d7881e87_bb54c439c5" tabIndex="-1"></input></div>
                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input></div></form>
                            </div>
                    </div>




        )
    }
}
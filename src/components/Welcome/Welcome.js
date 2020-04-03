import React from "react";
import Typography from "@material-ui/core/Typography";
import NavLinks from '../NavLinks/NavLinks';
import About from "../About/About";


require("typeface-vidaloka");
require("typeface-quicksand");

const styles = {
    parentNav: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '125px',
        flexFlow: 'column wrap',
    },

    titleFont: {
        fontFamily: "Vidaloka",
        justifyContent: 'flex-end',
    },

    nav: {
        justifyContent: 'center',
    }
};

const Welcome = () => {

        return (<div className="container">
                <div className="parent-nav" style={styles.parentNav}>
                    <div className="title">
                        <Typography variant="display3" color="primary" style={styles.titleFont} aria-label="Title">
                            JAI MONE'T
                        </Typography>
                    </div>
                    <div className="nav" style={styles.nav} aria-label="Navigation">
                        <NavLinks/>
                    </div>
                </div>
                <div className="body">

                </div>
            </div>
        )

};

export default Welcome;

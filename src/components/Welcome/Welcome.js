import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import NavLinks from '../NavLinks/NavLinks';


require("typeface-vidaloka");
require("typeface-quicksand");

const styles = {
    parent: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '125px',
        flexFlow: 'column wrap'
    },

    titleFont: {
        fontFamily: "Vidaloka",
        justifyContent: 'flex-end',
    },

    nav: {
        justifyContent: 'center',
    }
};

class Welcome extends Component {
    render() {
        return (<div className="parent" style={styles.parent}>
            <div className="title">
                <Typography variant="display3" color="primary" style={styles.titleFont} aria-label="Title">
                    JAI MONE'T
                </Typography>
            </div>
            <div className="nav" style={styles.nav} aria-label="Navigation">
                <NavLinks/>
            </div>
        </div>)
    }
}

export default Welcome;

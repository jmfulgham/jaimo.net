import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Landing from '../Views/Landing';


require("typeface-vidaloka");
require("typeface-quicksand");

const styles = {
    text: {
        fontFamily: "Vidaloka"
    },

    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
    },

    child:{
    padding: '9rem'
    }

}

class Welcome extends Component {
    render() {
        return <div style={styles.container}>
            <div style={styles.child}>
                <div>
            <Typography variant="display4" color="primary" style={styles.text} align="center">
                JAI MONE'T
            </Typography>
            </div>
            <div>
            <Typography variant="body2" color="secondary" align="center"
                        style={{fontSize: "40px", fontFamily: "Quicksand"}}>
                Software Engineer and Mobile App Developer
            </Typography>
            </div>
            <div style={{textAlign: 'center'}}>
                <Landing/>
            </div>
            </div>
        </div>;
    }
}

export default Welcome;

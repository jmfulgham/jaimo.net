import React from "react";
import NavLinks from '../NavLinks/NavLinks';


require("typeface-vidaloka");

const styles = {

    container: {
        height: '100vh',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
        padding: '2rem',

    },

    titleFont: {
        fontFamily: "Vidaloka",
        color: '#673445',
    },

    nav: {
        order: '1',
        alignSelf: 'center',
        fontSize: "2.85vw"
    },

    body: {
        width: '68%',
        alignSelf: 'center',
        order: '0',
        fontSize: '4.4vw'

    }
};

const Welcome = () => {

    return (<div className="container" style={styles.container}>
            <div className="body" style={styles.body}>


                Hello, my name is <text style={styles.titleFont}>
                Mone't.<br/></text>
                I'm a software engineer that turns <text style={styles.titleFont}>business logic</text> into
                <text style={styles.titleFont}> responsive, scalable </text>applications.

                <div className="nav" style={styles.nav} aria-label="Navigation">
                    <NavLinks/>
                </div>
            </div>

        </div>
    )

};

export default Welcome;

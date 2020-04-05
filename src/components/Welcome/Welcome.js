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
        backgroundColor: '#ffffff',

    },

    titleFont: {
        fontFamily: "Vidaloka",
        color: '#673445',
    },

    nav: {
        order: '1',
        alignSelf: 'center',
        fontSize: "2.85vw",
        paddingTop: '5vh',
        fontWeight: 'unset'
    },

    body: {
        width: '68%',
        alignSelf: 'center',
        order: '0',
        fontSize: '4.4vw',
        padding: '2rem',

    }
};

const Welcome = () => {

    return (<div className="welcome-container" style={styles.container}>
            <div className="body" style={styles.body}>


                Hello, my name is <text style={styles.titleFont}>
                Mone't.<br/></text>
                I'm a software engineer that turns <text style={styles.titleFont}>business logic</text> into
                <text style={styles.titleFont}> responsive, scalable </text>applications!

                <div className="nav" style={styles.nav} aria-label="Navigation">
                    <NavLinks/>
                </div>
            </div>

        </div>
    )

};

export default Welcome;

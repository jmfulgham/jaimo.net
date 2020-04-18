import React from "react";
import NavLinks from '../NavLinks/NavLinks';


require("typeface-vidaloka");

const styles = {

    container: {
        height: '99vh',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },

    titleFont: {
        fontFamily: "Vidaloka",
        color: '#673445',
        fontSize: "9.85vw",
    },

    nav: {
        order: '1',
        alignSelf: 'center',
        fontSize: "2.45vw",
        paddingTop: '1vh',
        fontWeight: 'unset'
    },

    body: {
        alignSelf: 'center',
        order: '0',
        fontSize: '4.4vw',
        padding: '2rem',

    }
};

const Welcome = () => {

    return (<div className="welcome-container" style={styles.container}>
            <div className="body" style={styles.body}>


                <text style={styles.titleFont}>
                JAI MONE'T<br/></text>
                Software Engineer

                <div className="nav" style={styles.nav} aria-label="Navigation">
                    <NavLinks/>
                </div>
            </div>

        </div>
    )

};

export default Welcome;

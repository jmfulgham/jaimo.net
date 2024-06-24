import React from "react";


require("typeface-vidaloka");
require("typeface-quicksand");

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

    subtitles: {
        fontFamily: 'Quicksand',
        color: '#000000',
    },

    nav: {
        order: '1',
        alignSelf: 'center'
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

                <text style={styles.subtitles}>
                    Hello, my name is </text><text style={styles.titleFont}>
                     Mone't.<br/>
                </text>
                <text style={styles.subtitles}>
                    I'm a software engineer based in <text style={styles.titleFont}>
                    Atlanta.<br/></text>
                </text>
            </div>

        </div>
    )

};

export default Welcome;

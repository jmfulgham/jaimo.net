import React from "react";

const profilePicture = require('../../assets/JM BW.JPG');

require("typeface-vidaloka");


const styles = {
    container: {
        display: 'flex',
        flexFlow: 'row wrap',
        maxWidth: '3000px',
        justifyContent: 'space-evenly',
        backgroundColor: '#9e9e9e',
        padding: '15px 0 25px 0',
        margin: '45px 0 45px 0',
    },
    h2: {
        color: '#673445',
        fontFamily: 'Vidaloka',
    },

    imgContainer: {
        order: '0',
    },

    img: {
        borderRadius: '65%'
    },
    bio:{
        width: '55%',
        order: '1',
        fontSize: '30px',
        alignSelf: 'center',
        color: '#ffffff',
    }
};

const About = () => {
    return (
        <div className="about-container" style={styles.container}>

            <div className="img-container" style={styles.imgContainer}>
                <img style={styles.img} src={profilePicture} alt="JM Selfie"/>
            </div>
            <div className="bio" style={styles.bio}>
                <h2 style={styles.h2}>Hey, I'm Mone't, but you can call me Mo...</h2>
              Here is my bio, and I'm trying to see something about spacing
                Here is my bio, and I'm trying to see something about spacing
                Here is my bio, and I'm trying to see something about spacing
                Here is my bio, and I'm trying to see something about spacing
                Here is my bio, and I'm trying to see something about spacing
                Here is my bio, and I'm trying to see something about spacing
                Here is my bio, and I'm trying to see something about spacing

        </div>
        </div>
    )
};

export default About;
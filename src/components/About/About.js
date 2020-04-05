import React from "react";

const profilePicture = require('../../assets/JM BW.JPG');
require("typeface-vidaloka");


const styles = {
    container: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        padding: '15px 0 25px 0',
        margin: '45px 0 45px 0',
        borderStyle: 'solid',
        borderColor:'#C4CCAB',
        borderWidth: '5px 0 5px 0',
        backgroundColor: '#ffffff'
    },
    h2: {
        color: '#673445',
        fontFamily: 'Vidaloka',
    },

    imgContainer: {
        order: '0',
        alignSelf: 'center'
    },

    body: {
        fontFamily: "Quicksand"
    },

    img: {
        borderRadius: '65%',
        border: '1px solid #C4CCAB'
    },
    bio: {
        width: '55%',
        order: '1',
        fontSize: '25px',
        alignSelf: 'center',
    },
    parent: {
        marginTop: '15vh',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Vidaloka',
    },

    section: {
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow: 'row wrap'
    },
    tech: {
        order: '0'
    },
    design: {
        order: '1'
    }
};

const About = () => {
    return (<div className="parent" style={styles.parent}>
            <div className="about-container" style={styles.container}>
                <div className="img-container" style={styles.imgContainer}>
                    <img style={styles.img} src={profilePicture} alt="JM Selfie"/>
                </div>
                <div className="bio" style={styles.bio}>
                    <h2 style={styles.h2}>About</h2>
                    <text style={styles.body}> I am a software engineer with a background in economics,
                        finance, and business analysis. Leveraging my experience, I turn business logic into responsive
                        and scalable applications.
                        I also create <a href="/graphics" alt="Jai Mone't Graphics">graphics</a>,
                        and study design in my spare time.
                    </text>
                    <section className="tools" style={styles.section}>

                        <div className="technologies" style={styles.tech}>

                            <h3>Development</h3>
                            <ul>
                                <li>React</li>
                                <li>React Native</li>
                                <li>Node.js</li>
                                <li>GraphQL</li>
                                <li>Kubernetes</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                        <div className="design" style={styles.design}>
                            <h3>Web/Graphic Design</h3>
                            <ul>
                                <li>Adobe Illustrator</li>
                                <li>Adobe Photoshop</li>
                                <li>Plain pencil and paper</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default About;
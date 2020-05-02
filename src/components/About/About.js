import React from "react";

const profilePicture = require('../../assets/JM BW.JPG');


const styles = {
    container: {
        display: 'flex',
        // flexFlow: 'row wrap',
        // justifyContent: 'space-evenly',
        // padding: '15px 0 25px 0',
        margin: '35px 0 35px 0',
        // backgroundColor: '#ffffff',
        // height: '55vh',
        order: '0',
        maxWidth: '65vw'
    },
    text: {
        // width: '25%',
        alignSelf: 'flex-end'
    },
    second: {
        display: 'flex',
        flexFlow: 'row wrap',
        order: '1',
        marginTop: '15vh',
    },
    imgContainer: {
        order: '2',
        alignSelf: 'flex-end'
    },

    body: {
        fontFamily: "Quicksand",
        margin: '15px'
    },

    img: {
        border: '1px solid #C4CCAB',

    },
    bio: {
        // width: '65%',
        order: '1',
        fontSize: '25px',
        alignSelf: 'flex-end',
        textAlign: 'end',
        margin: '2vw'
    },
    parent: {
        marginTop: '15vh',
        display: 'flex',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Vidaloka',
        color: '#673445',
        fontSize: '10vh',
    },

    section: {
        display: 'flex',
        order: '0',
        alignItems: 'flex-end',
    },
    tech: {
        order: '0',
        width: '10vw',
        height: '10vw'
    },
    design: {
        order: '1',
        width: '10vw',
        height: '10vw'
    }
};

const About = () => {
    return (
        <>
            <div className="parent" style={styles.parent}>
                <div className="about-container" style={styles.container}>
                    <div className="img-container" style={styles.imgContainer}>
                        <img style={styles.img} src={profilePicture} alt="JM Selfie"/>
                    </div>
                    <div className="bio" style={styles.bio}>
                        <h1 style={styles.title}>Hey, I'm Mone't</h1>
                        <section className="text" style={styles.text}>
                            <text style={styles.body}> I am a software engineer
                                with a background in economics,
                                finance, and business analysis.
                                Leveraging my experience,
                                I turn business logic into responsive
                                and scalable applications.
                                I also create <a href="/graphics" alt="Jai Mone't Graphics">graphics</a>,
                                and dabble in design
                                in my spare time.
                            </text>
                        </section>
                    </div>
                </div>
            </div>
            <div className='step-parent' style={styles.second}>
                <div className="tools" style={styles.section}>

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
                </div>
            </div>
        </>
    )
};

export default About;
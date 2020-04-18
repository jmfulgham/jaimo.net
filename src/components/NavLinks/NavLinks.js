import React from "react";
import {NavLink} from 'react-router-dom'

require("typeface-quicksand");
require("typeface-vidaloka");

const styles = {
    fontFamily: "Quicksand",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "unset",
    margin: '0.25vw'
};

const activeStyles = {
    color: "#342D35",
    fontFamily: "Vidaloka"
};

const links = [
    {
        to: '/about',
        title: 'About '
    },

    {
        to: "/graphics",
        title: " Graphics "
    },
    {
        to: "/contact-me",
        title: " Contact Me "

    }, {
        to: "/media",
        title: " Media "
    }];

const NavLinks = () => {
    return (links.map(item => {
        return (<NavLink className="nav-links" to={item.to} style={styles} activeStyle={activeStyles}>{item.title}</NavLink>)
    }))

};


export default NavLinks;
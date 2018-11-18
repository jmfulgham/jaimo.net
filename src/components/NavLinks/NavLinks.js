import React from "react";
import { NavLink } from 'react-router-dom'
require("typeface-quicksand");
require("typeface-vidaloka");

const styles = {
  fontFamily: "Vidaloka",
  color: "#342D35",
  fontWeight: "100",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "20px"
};

const activeStyles = {
  color: "#C4CCAB",
  fontFamily: "Quicksand"
};

const links = [
    {
    to: '/about',
    title: 'About '},

    {
        to: "/projects",
        title: "| Projects |"
    },
    {
        to: "/contact-me",
        title: " Contact Me "
    
}];

const NavLinks= () => {
        return( links.map(item => {
           return (<NavLink to={item.to} style={styles} activeStyle={activeStyles}>{item.title}</NavLink>)
        }))
            
    };


export default NavLinks;
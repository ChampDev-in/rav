import React  from 'react'
import "./profile.css"
import Nav from "./nav.js"
import Profilepic from "./profilepic"
import Bio from "./bio"
import Footer from "./footer"
import Footerdown from './footerdown'

export default function Biopage() {
    return (
        <>
         <Nav/>
         <Profilepic/>
         <Bio/>
         <Footer/>
         <Footerdown/> 
        </>
    )
}

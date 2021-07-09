import React  from 'react'
import "./profile.css"
import Nav from "./nav.js"
import Profilepic from "./profilepic"
import Reviews from './reviews'
import Footer from "./footer"
import Footerdown from "./footerdown"

export default function Reviewpage() {
    return (
        <>
          <div className="main" >
            <Nav/>
            <Profilepic/>
            <Reviews/>
            <Footer/>
            <Footerdown/>
          </div>  
        </>
    )
}

import React from 'react'
//import "./prfile.css"


export default function Nav (){
    return (
        <>
            <div className="header">
               <img src="Polygon.png" className="poly1"/>
               <span className="ravimg">Rav</span>
           
               <nav className="home">
                 <a href="#">HOME</a> 
               </nav>
             <div className="grid">
                <button className="profilebutton"> grid </button>
             </div>
          </div>
        </>
    );
}

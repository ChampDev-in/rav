import React from 'react'
import "./reviews.css"

export default function Reviews() {
    return (
        <>
           <div>
               <div className="menu">  
                   <nav className="navbar">
                     <a href="#" className="Bio">Bio</a>
                     <a href="#"  className="Reviews">Reviews</a> 
                   </nav>
               </div>
               
               <div className="reviews"> 

                   <div className="logos">
                       <img src="twitter.png" alt=""  className="twitter"/>
                       <img src="linkedin.png" alt=""  className="linkedin"/>
                   </div>

                    <div className=" reviewarea "> 
                      <textarea className="about" name="aboutreview" rows="4" cols="50">
               
                      </textarea> <br/>
                       <hr/>
                      <textarea className="about" name="aboutreview" rows="4" cols="50">
          
                       </textarea> <br/>
                      <hr/>
                      
                       <textarea className="about" name="aboutreview" rows="4" cols="50">
               
                       </textarea> <br/>
                       <hr/>
                       <textarea className="about" name="aboutreview" rows="4" cols="50">
   
                       </textarea> <br/>
                        <hr/>
                    </div>

               </div>



           </div>
               

        </>
    )
}

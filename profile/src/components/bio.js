import React  from 'react'

export default function Bio() {
    return (
        <>
          <div className="info">
              <div className="logo1"> 
                 <img src="twitter.png" alt=""  className="twitter"/>
                 <img src="linkedin.png" alt=""  className="linkedin"/>
               </div>

               <div className="bio">
                  <nav className="centre1">
                     <a href="#">Bio</a>
                     <a href="#">Reviews</a> 
                  </nav>
             
                  <br></br>
                  <div className="centre2">
                    <a href="#">About</a>
                    <br></br>
                    <textarea className="about" name="aboutreview" rows="4" cols="50">
               
                    </textarea> <br></br>
                    <textarea className="about" name="aboutreview" rows="4" cols="50">
               
                    </textarea> <br></br>
                    <hr color="black"/>
                    <br></br>

                    <a href="#">Industry</a>
                    <p>Information Technology</p>
                    <br></br>
                    <hr color="black"/>
                    <br></br>

                    <a href="#">Domain</a>
                    <p>Design</p>
                    <br></br>
                    <button className="designbutton">Ux Design</button>
                    <button className="designbutton">Product Design</button>
                    <br></br>

                    <hr color="black"/>
                    <br></br>

                    <a href="#">Tools</a>
                    <br></br>
                    <p>Figma</p> <br></br>
                    <p>Useberry</p>
                    <br></br>
                </div>  
              </div>
       </div>
     </>
    )
}

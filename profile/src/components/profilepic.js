import React from 'react'
//import "./prfile.css"


export default function Profilepic() {
    return (
        <>
            <div className="row">

                <div className="border" ></div> 

                <div className="pic">
                   <img src="profilepic.png" alt="prifilepic"/> <br/> 
                    <h3>JEAN GREY</h3>
                    <p>Director of Magic @MCU</p>
                </div>

                <div className="col2" > 
                    <button id="hi" >Say Hi!</button>
                </div>

            </div>
        </>
    )
}

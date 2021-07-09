//import { useState } from "react";
import Biopage from "./components/biopage"
import Reviewpage from "./components/reviewpage";
import {Route,Switch } from "react-router-dom";
  

function App() {

 /*const [bool ,setBool] = useState();
 setBool(){
   bool=true;
 }
  
 if(bool){
    <a href={ Biopage }></a>
 else {
  <a href={ Reviewpage }></a>
 }   
 }*/

  return (
     <>
       <div className="main" >
         <Switch>
           <Route path="/biopage" component={Biopage} />
           <Route path="/reviewpage" component={Reviewpage } />
         </Switch>
         
       </div>
    </>
  );
}

export default App;

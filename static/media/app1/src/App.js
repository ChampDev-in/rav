import  React from 'react';
import { googleProvider,facebookProvider} from './firebase';

function App() {
  const handleOnClick1 =  ()=> {
    firebase.auth()
     .signInwithPopup(facebookProvider)
     .then((res)=> alert( res.user))
     .catch((er)=> alert(er));
};

const handleOnClick2 =  ()=> {
      firebase.auth()
     .signInwithPopup(googleProvider)
     .then((res)=> alert( res.user))
     .catch((er)=> alert(er)); 
};

  return (
    <div className="App">
     
        <button onClick={handleOnClick1} >facebook </button>
        <button onClick={handleOnClick2} >google </button>
    </div>
  );
}

export default App;

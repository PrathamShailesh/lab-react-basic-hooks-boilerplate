import { useState ,useEffect } from "react";

function UseEffect(){

    const [showMessage, setShowMessage] = useState(false);
    useEffect(()=>{
      alert(`Content Button Clicked`)
    },[showMessage])
  
    return(
      <div>
        {showMessage && <p>Made By Kalvian</p>}
        <button onClick={() => setShowMessage(!showMessage)}>Content</button>
      </div>
    )
  }
  
  
  export default UseEffect;
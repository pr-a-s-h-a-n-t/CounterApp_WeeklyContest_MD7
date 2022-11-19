 
 
import CounterComponent from "./Component/CounterComponent";
import React, {useState, useEffect } from "react";

function App() {


  const[count, setCount] = useState(0);

  useEffect ( () => {
      console.log(count);
  } )

  
  function update(newValue) {
    setCount(newValue);
     
  }

  return (
    <div  >
      
       <CounterComponent count = { count } onChange = { update } />
       
    </div>
  );
}

export default App;

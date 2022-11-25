 
 
import CounterComponent from "./Component/CounterComponent";
import React, {useState, useEffect } from "react";

function App() {


  const[count, setCount] = useState(0);

  useEffect ( () => {
      console.log(count);
  }, [count] )

  
  function update( val) {
    setCount(val);
     
  }

  return (
    <div  >
      
       <CounterComponent count = { count } setCount = { update } />
       
    </div>
  );
}

export default App;

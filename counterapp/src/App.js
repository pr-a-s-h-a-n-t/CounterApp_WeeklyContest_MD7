 
 
import CounterComponent from "./Component/CounterComponent";
import React, {useState, useEffect } from "react";

function App() {


  const[count, setCount] = useState(0);
// if we dont write [count ] state in useEffect then also it will work same, becs we are altering only one state.
//  becz we re-rendering the UI every time counter value updated and each time counter value updates useEffect will be called but
//  now after adding the ( [count]  ) line, useeffect will be only called when  counter value is changed.
//  this is a better way of writing code in React
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

import "./CounterComponent.css";


let  CounterComponent = ( props ) => {


     
     

    let Increment = () =>  {

        props.setCount(Number(props.count) + 1);     
    }

    let Decrement = () => {

        if (props.count > 0) {
            props.setCount(Number(props.count) - 1);
            
        }
        else if (props.count === 0) {
            alert("Error!!!");
        }
         
         
    }

    let setZero = () => {
        props.setCount(0);
    };

     


  
    return(
        <div  className="wrapper" >

            <div  id="count" >
                {    props.count} 

            </div>

            <div>

                <button   onClick={ Increment }>    
                       Increment 
                </button>
                
                <button onClick={ Decrement }>
                        Decrement 
                </button>
            </div>

            <div>

            { props.count > 10 && <button   onClick={ setZero }>
                    GO BACK TO 0!!!
            </button>
            }
            </div>
        


        </div>
    )
}

export default CounterComponent;
   
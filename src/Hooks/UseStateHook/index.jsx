import {useState} from 'react';

export function Component1(){
    const [count,setCount]=useState(0);
    const increaseCounter=()=>{
        setCount(prev=>prev+1);
    }
    const decreaseCounter=()=>{
        setCount(prev=>prev-1);
    }
    return (
        <>
           <p>{count}</p>
           <button onClick={increaseCounter}>+</button>
           <button onClick={decreaseCounter}>-</button>
        
        </>
    )
}
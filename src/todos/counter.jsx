import React, { useReducer } from 'react';
const init={
    value1:0,
    value2:5
}
const reducer=(state,action)=>{
    switch (action.type) {
        case "increment":
           return {...state,value1:state.value1+action.val}
        case "decrement":
           return {...state,value1:state.value1-action.val}
        case "increment2":
           return {...state,value2:state.value2+action.val}
        case "decrement2":
           return {...state,value2:state.value2-action.val}
        case "reset":
            return init
        default:
            state
            break;
    }
}

const Counter = () => {
    const [count,dispatch]=useReducer(reducer,init)
    
    return (
        <div>
            <h1>{count.value1}</h1>
            <h1>{count.value2}</h1>
            <div>
            <button onClick={()=>dispatch({type:"increment",val:1})} className='bg-green-500 p-3 border-none'>increment</button>
            <button onClick={()=>dispatch({type:"decrement",val:2})} className='bg-red-500 p-3 border-none'>decrement</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:"increment2",val:5})} className='bg-green-500 p-3 border-none'>increment2</button>
            <button onClick={()=>dispatch({type:"decrement2",val:5})} className='bg-red-500 p-3 border-none'>decrement2</button>
            </div>
  
            <button onClick={()=>dispatch({type:"reset"})} className='bg-amber-400 p-3 border-none'>reset</button>
        </div>
    );
}

export default Counter;

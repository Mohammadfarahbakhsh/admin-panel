import { useState } from "react"

const cCount=(MainComponent)=>{
    const NewComponent=(props)=>{
    const [count,setCount]=useState(0)
    const counter=()=>{
    setCount(c=>c+1)}


        return(
            <MainComponent {...props } count={count} counter={counter}/>
        )
    }
    return NewComponent
}
export default cCount
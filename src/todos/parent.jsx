// import { useCallback, useState } from "react";
// import CountBox from "./CountBox";
// import CountButton from "./CountButton";

// const Parent=()=>{
//     const [count,setCount]=useState(0)
//     const [count2,setCount2]=useState(5)

//     const firstCount=useCallback(()=>{
//         setCount(count+1)
//     },[count])
//     const secondCount=useCallback(()=>{
//         setCount2(count2+1)
//     },[count2])




//     return(
//         <div>
//         <CountBox title="مجموعه1" count={count}/>
//         <CountButton title="مجموعه1" handleClick={firstCount}/>  



//         <CountBox title="مجموعه2" count={count2}/>
//         <CountButton title="مجموعه2" handleClick={secondCount}/>      
//         </div>
//     )
// }
// export default Parent
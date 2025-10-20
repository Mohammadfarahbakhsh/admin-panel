import cCount from "./Counter"

const ClickCount=(props)=>{
    const {count,counter}=props
    return(
       <div className="flex place-content-center">
         <button onClick={counter} className="bg-black mt-[5vh] text-white p-3 rounded-sm">count : {count}</button>
       </div>
    )
}
export default cCount(ClickCount)
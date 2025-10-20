import cCount from "./Counter"

const HoverCount=(props)=>{
    const {count,counter}=props
    return(
       <div className="flex place-content-center">
         <button onMouseEnter={counter} className="bg-black mt-[5vh] text-white p-3 rounded-sm">count : {count}</button>
       </div>
    )
}
export default cCount(HoverCount)
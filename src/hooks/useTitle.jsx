import { useEffect } from "react";
const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`my project | ${title}`
    })
}
export default useTitle;
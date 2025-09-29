
import Swal from "sweetalert2";

const NoneButton=()=>{
    const handleClick=()=>{
    Swal.fire({
        title: '<span class="font-bold">welcome</span>',
        customClass: {
        confirmButton: "bg-black rounded-sm  p-3 text-white",
      },
      buttonsStyling: false
    });
    }
    return(
        <div className="flex flex-col mt-[20vh]">
        <button onClick={handleClick} className="bg-black p-3 rounded-md text-white text-sm cursor-pointer place-self-center">
            میخوای کلیک کن
        </button>
        </div>
    )
}
export default NoneButton;
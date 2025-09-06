

const NoneButton=()=>{
    const handleClick=()=>{
        alert("ویرایشتو بکن")
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
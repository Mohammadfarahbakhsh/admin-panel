    
    import Swal from "sweetalert2";
    import { jpAxios } from "../JpAxios";
    
    export const setUserService=async(data)=>{
      const res =await jpAxios.post("/users",data)
      if(res){
        Swal.fire({
        title: `${res.data.username} : successful`,
        icon: "success",
        draggable: true,
        customClass: {
        confirmButton: "bg-black rounded-sm  p-3 text-white",
        },
        buttonsStyling: false
        });}}
    export const updateUserService=async(data ,userId)=>{
      const res = await jpAxios.put(`/users/${userId}`,data)
      if(res){
        Swal.fire({
        title: `${res.data.username} : successful`,
        icon: "success",
        draggable: true,
        customClass: {
        confirmButton: "bg-black rounded-sm  p-3 text-white",
        },
        buttonsStyling: false
        });}}
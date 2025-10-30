    import { jpAxios } from "../JpAxios";
    import Swal from "sweetalert2";
    
    export const getPostService=()=>{
        return jpAxios.get('/posts')
    }
        export const setPostService=async(data)=>{
          const res =await jpAxios.post("/posts",data)
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
        export const updatePostService=async(data ,postId)=>{
          const res = await jpAxios.put(`/posts/${postId}`,data)
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



            
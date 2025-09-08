import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import  Axios  from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users,setUsers]=useState([])
  const Navigate = useNavigate()
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      setUsers(res.data)
    }).catch(err=>{
      console.log(err);
    })
  }, []);




  const handelDelete = (itemId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-black rounded-sm  p-3 text-white ml-[2vh]",
        cancelButton: "bg-red-600 rounded-sm  p-3 text-white"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: `ایا از حذف ${itemId} اطمینا دارید`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method:"DELETE",
          url:`https://jsonplaceholder.typicode.com/posts/${itemId}`
        }).then(res=>{
          if(res.status==200){
          const newUsers=users.filter(u=>u.id != itemId)
          setUsers(newUsers)
          swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
          }
          else{
            Swal("system has crashed"),{
              icon:"error",
              button :`ok ${className="bg-black rounded-sm  p-3 text-white"}`
            }
          }
        })
      } 
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }
  return (
    <div className={`${style.item_content} mt-5 p-4 w-full max-w-none`}>
      <h4 className="text-center">مدریت کاربران</h4>

      {/* بخش دکمه + و اینپوت سرچ */}
      <div className="flex flex-wrap items-center justify-between w-full my-2 mb-4">
        {/* دکمه */}
        <div className="w-full sm:w-auto mb-2 sm:mb-0">
          <Link to="/users/add">
            <button className="px-4 py-2 cursor-pointer hover:bg-gray-950 rounded-md bg-black text-white focus:outline-none focus:ring-2">
              <i className="fas fa-plus text-white"></i>
            </button>
          </Link>
        </div>

        {/* اینپوت سرچ */}
        <div className="w-full sm:w-1/2 md:w-1/3">
          <input
            placeholder="جستوجو"
            type="text"
            className="block w-full text-right rounded-md border border-black px-3 py-2 focus:ring-2 focus:ring-black focus:ring-opacity-50"
          />
        </div>
      </div>
        {users.length ?(
        <table className="w-full  border-separate  border-spacing-y-[2.5vh] inset-shadow-sm shadow h-[7vh]">
        <thead>
          <tr className="divide-y">
            <th>عملیات</th>
            <th>ایمیل</th>
            <th>نام کاربری</th>
            <th>نام</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u=>(
            <tr key={u.id} className="divide-y">
            <td>
              <i onClick={() => handelDelete(u.id)} className="fas fa-trash text-red-600 mx-2 cursor-pointer"></i>
              <i onClick={() => Navigate("/users/add/2", { state: "react" })} className="fas fa-edit text-yellow-500 mx-2 cursor-pointer"></i>
            </td>
            <td>{u.email}</td>
            <td>{u.username}</td>
            <td>{u.name}</td>
            <td>{u.id}</td>
          </tr>
          ))}
        </tbody>
      </table>
        ): (
          <h4 className="text-center text-black">لطفا صبر کنید ...</h4>
        )}
      

    </div>
  );
};

export default Users;

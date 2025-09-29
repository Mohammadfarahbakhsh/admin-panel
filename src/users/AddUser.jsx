import { useState,useEffect } from "react";
import { data, Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { setUserService,updateUserService } from "../services/UserService";
import { jpAxios } from "../JpAxios";
const AddUser = () => {
    const {userId} = useParams()
    const navigate=useNavigate()
    const [data,setData]=useState({
      name:"",
      email:"",
      username:"",
      address:{
        street:"",
        city:"",
        suite:"",
        zipcode:""
      }})
    const handelAddUser=(e)=>{
      e.preventDefault()
      if(!userId){
        setUserService(data)
      }else{
        updateUserService(data,userId)
      }
    }
    useEffect(() => {
      jpAxios.get(`/users/${userId}`).then(res=>{
        setData({
      name:res.data.name,
      email:res.data.email,
      username:res.data.username,
      address:{
        street:res.data.address.street,
        city:res.data.address.city,
        suite:res.data.address.suite,
        zipcode:res.data.address.zipcode
      }})})},);
  return (
    <div className="mt-5 p-4 w-full">
      <h4 className="text-center text-black text-3xl">
        {userId ? " ویرایش کاربر " :" افزودن کاربر  "}
      </h4>
      <div className="flex justify-center mt-5">
        <form onSubmit={handelAddUser} className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl/20 p-6">
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">نام و نام خانوادگی</label>
            <input value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} type="text" className="w-full border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">نام کاربری</label>
            <input value={data.username} onChange={(e)=>setData({...data,username:e.target.value})} type="text" className="w-full border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">ایمیل</label>
            <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} type="email" className="w-full border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">آدرس</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input value={data.address.city} onChange={(e)=>setData({...data,address:{...data,city:e.target.value}})} type="text" placeholder="شهر" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
              <input value={data.address.street} onChange={(e)=>setData({...data,address:{...data,street:e.target.value}})} type="text" placeholder="خیابان" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
              <input value={data.address.suite} onChange={(e)=>setData({...data,address:{...data,suite:e.target.value}})} type="text" placeholder="ادامه آدرس" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
              <input value={data.address.zipcode} onChange={(e)=>setData({...data,address:{...data,zipcode:e.target.value}})} type="text" placeholder="کد پستی" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
            </div>
          </div>
          <div className="flex gap-3 ">
            <button type="submit" className="bg-black text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-950">
              {userId ? "ویرایش":"ثبت "}
            </button>
            
            <button type="button" onClick={()=>navigate(-1)} className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-red-600">
              بازگشت
            </button>
            
          </div>
        </form>
      </div>
      <Outlet/>
    </div>
  );
}

export default AddUser;
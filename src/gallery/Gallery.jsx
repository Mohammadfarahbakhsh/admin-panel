import {useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { jpAxios } from "../JpAxios";

const Gallery = (props) => {
  useTitle("Gallery")
  const [albums,setAlbums]=useState([])
  const { Confirm , Alert, Cancel, Error} = props; 
  useEffect(() => {
    jpAxios.get("/albums").then((res)=>{
      setAlbums(res.data)
    }).catch(err=>{
      console.log(err);
      
    })
  }, []);

  const deleteGallery=async(itemId)=>{
    const isConfirmed = await Confirm(`آیا از حذف کاربر ${itemId} اطمینان دارید؟`);
    if (isConfirmed) {
      try {
        const res = await jpAxios.delete(`/albums/${itemId}`);
        if (res.status === 200) {
          // حذف از state
          const newAlbums = albums.filter((u) => u.id !== itemId);
          setAlbums(newAlbums);

          Alert("البوم با موفقیت حذف شد","success")

        }
      } catch (error) {
        Error("در حذف کاربر خطایی رخ داد","Error")
      }
    } else {
      Cancel("عملیات حذف لغو شد","error")
    }
  };
  return (      
  <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      📸 Photo Gallery
    </h1>

    {/* جست‌وجو */}
    <div className="max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="جست‌وجوی عکس..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
      />
    </div>

    {/* گالری عکس‌ها */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {albums.map((u) => (

        <div
          key={u.id}
          className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <img
          src={`https://picsum.photos/300/200?random=/${u.id}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-gray-800 text-sm truncate">
              عنوان عکس شماره {u.id}
            </h3>
            <div className="flex justify-between mt-2">
              <button className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 text-sm">
                مشاهده
              </button>
              <button onClick={()=>deleteGallery(u.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm">
                حذف
              </button>
            </div>
          </div>
        </div>
       ))}
    </div>
  </div>
  );
};

export default Gallery;

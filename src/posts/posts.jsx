import { useEffect, useState } from "react";
import style from "../style.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getPostService } from "../services/postService";
const Posts = () => {
  const Navigate=useNavigate()
  const [posts,setPosts]=useState([]) 
  const [mainPosts,setMainPosts]=useState([])
  const [uId,setUId]=useState("")
  const handelSearch=()=>{
    if(uId>0) setPosts(mainPosts.filter(e=>e.userId==uId))
    else setPosts(mainPosts)
  }
  const handelDelete=(postId)=>{

  }
  const getPosts=async()=>{
    const res=await getPostService();
    setPosts(res.data)
    setMainPosts(res.data)
  }
  useEffect(() => {
    getPosts()
  }, []);

  useEffect(() => {
    handelSearch()
  }, [uId]);


  return (
    <div className={`${style.item_content} mt-5 p-4 w-full `}>
      <h4 className="text-center font-bold mb-4">مدیریت پست ها</h4>
      <div className="flex flex-wrap items-center justify-between w-full my-2 mb-4">
        <div className="w-full sm:w-auto mb-2 sm:mb-0">
          <Link to="/post/add">
            <button className="px-4 py-2 cursor-pointer hover:bg-gray-950 rounded-md bg-black text-white focus:outline-none focus:ring-2">
              <i className="fas fa-plus text-white"></i>
            </button>
          </Link>
        </div>

        {/* ورودی جست‌وجو */}
        <div className="w-full sm:w-1/2 md:w-1/3">
          <input
            onChange={(e)=>setUId(e.target.value)}
            value={uId}
            placeholder="جست‌وجو"
            type="number"
            className="block w-full text-right rounded-md border border-black px-3 py-2 focus:ring-2 focus:ring-black focus:ring-opacity-50"
          />
        </div>
      </div>

      {/* جدول کاربران */}
      {posts.length ? (
        <table className="w-full border-separate border-spacing-y-[2.5vh] shadow h-[7vh]">
          <thead>
            <tr className="divide-y text-center">
              <th>عملیات</th>
              <th>عنوان</th>
              <th>متن</th>
              <th>ایدی کاربر</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((u) => (
              <tr key={u.id} className="divide-y text-center">
                <td>
                  <i
                    onClick={() => handelDelete(u.id)}
                    className="fas fa-trash text-red-600 mx-2 cursor-pointer"
                  ></i>
                  <i onClick={() =>Navigate(`/post/add/${u.id}`, { state: "react" })
                    }
                    className="fas fa-edit text-yellow-500 mx-2 cursor-pointer"
                  ></i>
                </td>
                <td>{u.body}</td>
                <td>{u.title}</td>
                <td onClick={()=>setUId(u.userId)}>{u.userId}</td>
                <td>{u.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-center text-black">لطفاً صبر کنید...</h4>
      )}
    </div>
  );
};
export default Posts;

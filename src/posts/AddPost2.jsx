import React, { useEffect, useReducer, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { setPostService, updatePostService } from "../services/postService";
import { init, reducer } from "./postReducer";



const AddPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [data,dispatch]=useReducer(reducer,init)

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!postId) {
      setPostService(data.postData);
    } else {
      updatePostService(data.postData, postId);
    }
  };
  const setInputValue=(e,propName)=>{
    dispatch({
      type:"setInputValue",
      propName:propName,
      propValue:e.target.value
    })
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {dispatch({
        type:"changeUser",
        payload:res.data
      })
    }).catch((err) => console.log(err));

    if (postId) {      
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {dispatch({
          type:"isUpdate",
          payload:res.data
        })
      });
    }
  }, []);

  return (
    <div className="w-full mt-10 px-4" dir="rtl">
      <h4 className="text-center text-black text-3xl font-bold mb-8">
        {postId ? "ویرایش پست" : "افزودن پست"}
      </h4>

      <div className="flex justify-center">
        <form
          onSubmit={handleAddPost}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 space-y-6"
        >
          {/* انتخاب کاربر */}
          <div>
            <label className="block text-gray-800 font-semibold text-lg mb-2 text-right">
              کاربر
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={data.postData.userId}
              onChange={(e) => setInputValue(e,"userId")}
            >
              <option value="">کاربر مورد نظر را انتخاب کنید</option>
              {data.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>

          {/* آی‌دی کاربر */}
          <div>
            <label className="block text-gray-800 font-semibold text-lg mb-2 text-right">
              آی‌دی کاربر
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={data.postData.userId}
              onChange={(e) => setData(setInputValue(e,"userId"))}
            />
          </div>

          {/* عنوان */}
          <div>
            <label className="block text-gray-800 font-semibold text-lg mb-2 text-right">
              عنوان
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={data.postData.title}
              onChange={(e) => setData(setInputValue(e,"title"))}
            />
          </div>

          {/* متن اصلی */}
          <div>
            <label className="block text-gray-800 font-semibold text-lg mb-2 text-right">
              متن اصلی
            </label>
            <textarea
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
              value={data.postData.body}
              onChange={(e) => setData(setInputValue(e,"body"))}
            ></textarea>
          </div>

          {/* دکمه‌ها */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200"
            >
              بازگشت
            </button>
            <button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200"
            >
              {postId ? "ویرایش" : "افزودن"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
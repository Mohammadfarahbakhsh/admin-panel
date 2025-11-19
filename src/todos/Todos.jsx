import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { jpAxios } from "../JpAxios";
import { useParams } from "react-router-dom";



const Todos = () => {
  useTitle("Todos")
  const [todos,setTodos]=useState([])

  useEffect(() => {
    jpAxios.get(`/todos`).then((res)=>{
      setTodos(res.data)
    }).catch(err=>{
      console.log(err);
      
    });
  }, []);
  const deleteTodo=async(itemId)=>{
    const Delete=await jpAxios.delete(`/todos/${itemId}`)
    if(Delete.status==200){
      const newTodo=todos.filter((u)=>u.id!==itemId)
      setTodos(newTodo)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white/60 backdrop-blur rounded-2xl shadow-lg border border-gray-100">
  <div className="flex items-center justify-center mb-4">
    <h2 className="text-lg sm:text-xl  font-semibold text-gray-800">Todos</h2>
  </div>

  <div className="flex gap-3 items-center mb-4">
    <input
      type="text"
      placeholder="... جستجو"
      className="flex-1 px-3 py-2 text-right rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
    />
  </div>

  <ul className="space-y-3">
    {todos.map((u)=>(
      <li key={u.id} className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow bg-white">
      <div className="flex-shrink-0 mt-0.5">
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 truncate">{u.title}</p>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          وضعیت: <span className="font-medium text-gray-700">{u.completed?"done":"inCompleted"}</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md hover:bg-gray-100">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>

        <button onClick={()=>deleteTodo(u.id)} className="p-2 rounded-md hover:bg-gray-100">
          <svg
            className="w-4 h-4 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
    ))}
  </ul>

  <div className="mt-5 text-center text-sm text-gray-500">
    تسک‌ای وجود ندارد
  </div>
</div>
);
}
export default Todos;

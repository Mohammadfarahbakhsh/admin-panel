import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { jpAxios } from "../JpAxios";



const Todos = () => {
  useTitle("Todos")
  const [todos,setTodos]=useState([])
  useEffect(() => {
    jpAxios.get("/todos").then((res)=>{
      setTodos(res.data)
    }).catch(err=>{
      console.log(err);
      
    });
  }, []);
  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 space-y-4">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Todo</h2>

    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter todo title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
        <input
          type="number"
          placeholder="Enter user id"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" className="h-5 w-5 text-indigo-600 border-gray-300 rounded" />
        <span className="text-gray-700">Completed</span>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg shadow"
        >
          Submit
        </button>

        <button
          type="reset"
          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
);
}
export default Todos;

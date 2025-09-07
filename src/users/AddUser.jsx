import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
    const {userId} = useParams()
    const param=useLocation()
    console.log(param);
    
    const navigate=useNavigate()
  return (
    <div className="mt-5 p-4 w-full">
      <h4 className="text-center text-black text-3xl">
        {userId ? " ویرایش کاربر " :" افزودن کاربر  "}
      </h4>
      <div className="flex justify-center mt-5">
        <form className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl/20 p-6">
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">نام و نام خانوادگی</label>
            <input type="text" className="w-full border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">نام کاربری</label>
            <input type="text" className="w-full border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">ایمیل</label>
            <input type="email" className="w-full border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 place-self-end  mb-2">آدرس</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" placeholder="شهر" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
              <input type="text" placeholder="خیابان" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
              <input type="text" placeholder="ادامه آدرس" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
              <input type="text" placeholder="کد پستی" className="border text-right border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400" />
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
};

export default AddUser;
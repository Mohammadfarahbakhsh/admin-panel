import { Link, useNavigate} from "react-router-dom";
import style from "../style.module.css";

const Users = () => {
  const Navigate = useNavigate()
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

      {/* جدول کاربران */}
      <table className="w-full inset-shadow-sm shadow divide-y h-[7vh]">
        <thead>
          <tr>
            <th>عملیات</th>
            <th>ایمیل</th>
            <th>نام کاربری</th>
            <th>نام</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className="fas fa-trash text-red-600 mx-2 cursor-pointer"></i>
              
              <i onClick={()=>{Navigate("/users/add/2")}} className="fas fa-edit text-yellow-500 mx-2 cursor-pointer"></i>
            </td>
            <td>mohammadkazemfarahbakhsh5@gmail.com</td>
            <td>mohammad kazem</td>
            <td>careless</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;

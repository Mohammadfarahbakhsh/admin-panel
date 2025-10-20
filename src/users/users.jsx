import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { jpAxios } from "../JpAxios";
import withAlert from "../hoc/withalert";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [mainUsers, setMainUsers] = useState([]);
  const Navigate = useNavigate();
  const { Confirm , Alert, Cancel, Error} = props; 

  useEffect(() => {
    jpAxios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setMainUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelDelete = async (itemId) => {

    const isConfirmed = await Confirm(`آیا از حذف کاربر ${itemId} اطمینان دارید؟`);
    if (isConfirmed) {
      try {
        const res = await jpAxios.delete(`/users/${itemId}`);
        if (res.status === 200) {
          // حذف از state
          const newUsers = users.filter((u) => u.id !== itemId);
          setUsers(newUsers);

          Alert("کاربر با موفقیت حذف شد","success")

        }
      } catch (error) {
        Error("در حذف کاربر خطایی رخ داد","Error")
      }
    } else {
      Cancel("عملیات حذف لغو شد","error")
    }
  };

  // تابع جست‌وجو
  const handelSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setUsers(mainUsers.filter((c) => c.name.toLowerCase().includes(value)));
  };

  return (
    <div className={`${style.item_content} mt-5 p-4 w-full max-w-none`}>
      <h4 className="text-center font-bold mb-4">مدیریت کاربران</h4>

      {/* دکمه افزودن و سرچ */}
      <div className="flex flex-wrap items-center justify-between w-full my-2 mb-4">
        {/* دکمه افزودن */}
        <div className="w-full sm:w-auto mb-2 sm:mb-0">
          <Link to="/users/add">
            <button className="px-4 py-2 cursor-pointer hover:bg-gray-950 rounded-md bg-black text-white focus:outline-none focus:ring-2">
              <i className="fas fa-plus text-white"></i>
            </button>
          </Link>
        </div>

        {/* ورودی جست‌وجو */}
        <div className="w-full sm:w-1/2 md:w-1/3">
          <input
            onChange={handelSearch}
            placeholder="جست‌وجو"
            type="text"
            className="block w-full text-right rounded-md border border-black px-3 py-2 focus:ring-2 focus:ring-black focus:ring-opacity-50"
          />
        </div>
      </div>

      {/* جدول کاربران */}
      {users.length ? (
        <table className="w-full border-separate border-spacing-y-[2.5vh] shadow h-[7vh]">
          <thead>
            <tr className="divide-y text-center">
              <th>عملیات</th>
              <th>ایمیل</th>
              <th>نام کاربری</th>
              <th>نام</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="divide-y text-center">
                <td>
                  <i
                    onClick={() => handelDelete(u.id)}
                    className="fas fa-trash text-red-600 mx-2 cursor-pointer"
                  ></i>
                  <i
                    onClick={() =>
                      Navigate(`/users/add/${u.id}`, { state: "react" })
                    }
                    className="fas fa-edit text-yellow-500 mx-2 cursor-pointer"
                  ></i>
                </td>
                <td>{u.email}</td>
                <td>{u.username}</td>
                <td>{u.name}</td>
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

export default Users;
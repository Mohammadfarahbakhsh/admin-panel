import Users from "./users/users";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Posts from "./posts/posts";
import Gallery from "./gallery/Gallery";
import MainContext from "../src/contexts/MainContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import NoneButton from "./users/NoneButton";
import WithAlert2 from "./hoc/WithAlert2";
const Content = () => {
  const {showMenu, setShowMenu} = useContext(MainContext)
  const handleShowMenu = (event) => {
    event.stopPropagation()
    setShowMenu(!showMenu)
  };
  const renderUsers=(Confirm,Alert,Cancel,Error)=> <Users Cancel={Cancel} Error={Error} Confirm={Confirm} Alert={Alert}/>
  return (
    <div onClick={() => {setShowMenu(false)}} className={`${style.content_section} `}>
      <i onClick={handleShowMenu} className={`${style.menu_button} visible md:invisible fas fa-bars text-gray-800 m-2 cursor-pointer`}></i>
          <Routes>
            <Route path="/users" element={<WithAlert2 render={renderUsers}/>}/>
            <Route path="/users/add" element={<AddUser/>}>
            <Route path=":userId" element={<NoneButton/>}/>
            </Route>
            <Route path="/Posts" element={<Posts />}/>
            <Route path="/Gallery" element={<Gallery />}/>
            <Route path="/Todos" element={<Todos/>}/>
            <Route path="*" element={<WithAlert2 render={renderUsers}/>}/>
          </Routes>
    </div>
  );
};
export default Content;

{/* <Route path="/" element={isUser ? <Users/> : <Navigate replace to="/Posts"/>}/> */}
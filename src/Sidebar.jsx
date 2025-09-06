import style from "./style.module.css";
import logo from "./assets/images/logo.png";
import { useContext } from "react";
import MainContext from "./contexts/MainContext";
import {  NavLink  } from "react-router-dom";
const Sidebar = () => {
  const {showMenu}=useContext(MainContext)
  return (
      
    <div className={`${style.sidebar_section} bg-zinc-900` } style={showMenu ? {right:0}:{}}>
      <ul className={`${style.sidebar_list} flex flex-col items-end m-0 p-0 space-y-5 `}>
        <li className={`${style.sidebar_avatar} place-self-center`}>
            <img src={logo} alt="logo"/>
        </li>
        <NavLink className={({isActive})=>{return isActive ? "bg-white p-[0.5px]  rounded-[2px] mr-[2vh]" :"text-white"}}  to="/users">
        <li className="block w-full text-right">
          کاربران
        </li>
          </NavLink> 
          <NavLink className={({isActive})=>{return isActive ? "bg-white p-[0.5px] rounded-[2px] mr-[2vh]" :"text-white"}}  to="/Posts">
        <li className="block w-full text-right">
          پست ها
        </li>
          </NavLink> 
          <NavLink className={({isActive})=>{return isActive ? "bg-white p-[0.5px] rounded-[2px] mr-[2vh]" :"text-white"}}  to="/Gallery">
        <li className="block w-full text-right"> 
            گالری
        </li>
          </NavLink> 
          <NavLink className={({isActive})=>{return isActive ? "bg-white p-[0.5px] rounded-[2px] mr-[2vh]" :"text-white"}}  to="/Todos">
        <li className="block w-full text-right">
          کارها
        </li>
          </NavLink> 
      </ul>
    </div>
  );
};
export default Sidebar;

import Content from "./content";
import Sidebar from "./Sidebar";
import MainContext from "./contexts/MainContext";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
const App = () => {
      const [showMenu,setShowMenu]=useState(false)
  return (
    <BrowserRouter>
    <div>
      <MainContext.Provider value={{showMenu, setShowMenu}} >
        <Content />
        <Sidebar />
      </MainContext.Provider>
    </div>
    </BrowserRouter>
  );
};
export default App;

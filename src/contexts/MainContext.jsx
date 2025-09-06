import { createContext } from "react";

const MainContext = createContext({
  showMenu: false,
  setShowMenu: () => {},
});
export default MainContext;

import useTitle from "../hooks/useTitle";
import style from "../style.module.css";
import Parent from "./parent";


const Todos = () => {
  useTitle("Todos")
  return (
    <div className={`${style.item_content} mt-5 p-4 w-full`}>
      <h4 className="text-center">مدریت کارها</h4>
      <Parent/>
    </div>
  );
};
export default Todos;

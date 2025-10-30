import style from "../style.module.css";
import Counter from "./counter";

const Todos = () => {
  return (
    <div className={`${style.item_content} mt-5 p-4 w-full`}>
      <h4 className="text-center">مدریت کارها</h4>
      <Counter/>
    </div>
  );
};
export default Todos;

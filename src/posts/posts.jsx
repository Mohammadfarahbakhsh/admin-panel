import style from "../style.module.css";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

const Posts = () => {

  return (
    <div className={`${style.item_content} mt-5 p-4 w-full `}>
      <h4 className="text-center">مدریت پست ها</h4>
      <ClickCount/>
      <HoverCount/>
    </div>
  );
};
export default Posts;

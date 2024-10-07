import { useContext } from "react";
import "./CategorieButton.css";
import { categoryContext } from "../../../context/context";
const CategorieButton = ({ imgsrc, title, onButtonClick, id, ...props }) => {
  const value = useContext(categoryContext);
  return (
    <div
      className="cat-cont"
      {...props}
      onClick={() => {
        value.setCategory(id);
      }}
      style={value.category == id ? { opacity: 1 } : {}}
    >
      <img width="20" height="20" src={imgsrc} alt="shop" />
      {title}
    </div>
  );
};

export default CategorieButton;

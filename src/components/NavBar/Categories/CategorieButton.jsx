import { useContext } from "react";
import "./CategorieButton.css";
import { categoryContext } from "../../../context/context";
const CategorieButton = ({ imgsrc, title, onButtonClick, ...props }) => {
  const value = useContext(categoryContext);
  return (
    <div
      className="cat-cont"
      {...props}
      onClick={() => {
        value.setCategory(title);
      }}
      style={value.category == title ? { opacity: 1 } : {}}
    >
      <img width="20" height="20" src={imgsrc} alt="shop" />
      {title}
    </div>
  );
};

export default CategorieButton;

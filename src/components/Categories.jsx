import { useRef } from "react";
import CategorieButton from "./CategorieButton";
import "./Categories.css";
const Categories = ({}) => {
  return (
    <>
      <div className="catContainer" ref={cat_container_ref}>
      </div>
    </>
  );
};
export default Categories;

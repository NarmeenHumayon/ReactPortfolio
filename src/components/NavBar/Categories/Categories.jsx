import { useEffect, useRef, useState } from "react";
import CategorieButton from "./CategorieButton";
import "./Categories.css";
const Categories = ({}) => {
  const cat_container_ref = useRef();
  const [categories, setCategories] = useState([]);
  const [showLeft, setShowLeft] = useState(false);
  const [ShowRight, setShowRight] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="request_message"></div>
      <div
        style={{ display: "flex", alignItems: "center", userSelect: "none" }}
      >
        {showLeft ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
            style={{
              opacity: 0.7,
              margin: "0 10px",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
            onClick={() => {
              cat_container_ref.current.scrollLeft -= 100;
              if (cat_container_ref.current.scrollLeft <= 0) {
                setShowLeft(false);
              }

              if (!ShowRight) {
                setShowRight(true);
              }
            }}
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        ) : (
          <div
            style={{
              opacity: 0.7,
              width: "26px",
              margin: "0 10px",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
          ></div>
        )}

        <div className="catContainer" ref={cat_container_ref}>
          {categories.map((cat) => (
            <CategorieButton
              key={cat._id}
              id={cat._id}
              imgsrc={`http://localhost:5000/uploads/${cat.imgsrc}`}
              title={cat.name}
            />
          ))}
          {/* <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/shop.png"
            title={"shop"}
          />
          <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/5-star-hotel--v2.png"
            title={"hotel"}
          />
          <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/cottage--v1.png"
            title={"guest house"}
          />
          <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/mini-bar.png"
            title={"bar"}
          />
          <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/tower.png"
            title={"castles"}
          />
          <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/strength.png"
            title={"gym & workout"}
          />
          <CategorieButton
            imgsrc="https://img.icons8.com/ios-filled/50/coliseum.png"
            title={"top cities"}
          />
          <CategorieButton
            imgsrc="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
            title={"earth homes"}
          />
          <CategorieButton
            imgsrc="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg"
            title={"chinese homes"}
          />
          <CategorieButton
            imgsrc="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
            title={"caves"}
          /> */}
        </div>
        {ShowRight ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
            style={{ opacity: 0.7, margin: "0 10px", cursor: "pointer" }}
            onClick={() => {
              if (!showLeft) {
                setShowLeft(true);
              }
              const oldScrollLeft = cat_container_ref.current.scrollLeft;
              cat_container_ref.current.scrollLeft += 100;
              if (oldScrollLeft == cat_container_ref.current.scrollLeft) {
                setShowRight(false);
              }
            }}
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        ) : (
          <div
            style={{
              opacity: 0.7,
              width: "26px",
              margin: "0 10px",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
          ></div>
        )}
      </div>
    </>
  );
};
export default Categories;

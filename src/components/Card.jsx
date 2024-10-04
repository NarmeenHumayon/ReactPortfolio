import { useState } from "react";
import "./Card.css";
const Card = ({ images, name, desc, price, rating, type, ...props }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div className="cardCont" {...props}>
        <div
          style={{
            backgroundImage: `url(${images[imageIndex % images.length]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "250px",
            height: "250px",
            borderRadius: "15px",
          }}
        >
          <div className="nextImg">
            {imageIndex > 0 ? (
              <button
                onClick={() => {
                  setImageIndex((e) => e - 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#FFF "
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </button>
            ) : (
              <div className="empt"></div>
            )}
            {images.length > 1 && imageIndex < images.length - 1 ? (
              <button
                onClick={() => {
                  setImageIndex((e) => e + 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#FFF "
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="name">
          {name}{" "}
          <div className="rating">
            {rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12 "
              fill="#FFD700"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
        </div>
        <div className="description">{desc}</div>
        <div className="description">{type}</div>
        <div className="price">{price}</div>
      </div>
    </>
  );
};
export default Card;

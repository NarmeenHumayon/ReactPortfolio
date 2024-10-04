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
          </div>
      </div>
    </>
  );
};
export default Card;

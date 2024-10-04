import { useState } from "react";
import "./Card.css";
const Card = ({ images, name, desc, price, rating, type, ...props }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div className="cardCont" {...props}>
      </div>
    </>
  );
};
export default Card;

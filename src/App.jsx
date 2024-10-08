import "./App.css";
import { categoryContext } from "./context/context";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Gears from "./components/Loaders/Gears";
import Space from "./components/Loaders/Space";
import { useParams } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { query } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/item?cat_id=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [, category]);
  return (
    <>
      <categoryContext.Provider value={{ category, setCategory }}>
        <NavBar />
        <div
          className="container"
          onClick={() => {
            fetch("http://localhost:5000/api/test")
              .then((data) => data.json())
              .then((res) => {
                console.log(res);
              });
          }}
        >
          {isLoading ? (
            <Gears />
          ) : items.length ? (
            items.map(({ name, desc, price, imgsrc, rating, type }) => (
              <Card
                images={[`http://localhost:5000/uploads/${imgsrc}`]}
                name={name}
                rating={`${rating}.0/5`}
                type={type}
                desc={desc}
                price={price}
              />
            ))
          ) : (
            <>
              <Space />
            </>
          )}{" "}
          {/* <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
              "https://a0.muscache.com/im/pictures/07824a1a-09a9-4a1d-903c-bcd84b9a6b96.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          />
          <Card
            images={[
              "https://a0.muscache.com/im/pictures/7b43d02d-bc24-4271-b90e-29fcdd43bd56.jpg?im_w=720",
            ]}
            name={"Card"}
            rating={4.5}
            type={"Private room"}
            desc={"This is a card to show places"}
            price={"PKR 10"}
          /> */}
        </div>
        <Footer />
      </categoryContext.Provider>
    </>
  );
}

export default App;

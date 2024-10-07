import "./App.css";
import { categoryContext } from "./context/context";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <categoryContext.Provider value={{ category, setCategory }}>
      <NavBar />
        <div
          className="container"
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
        />
      </div>
      <Footer />
      </categoryContext.Provider>
    </>
  );
}

export default App;

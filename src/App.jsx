import "./App.css";
import { categoryContext } from "./context/context";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import Gears from "./components/Loaders/Gears";
import { useParams } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const canvasContRef = useRef();
  const [items, setItems] = useState([]);
  const [showScreen, setShowScreen] = useState(false);
  const { query } = useParams();
  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
      setTimeout(() => {
        var addition = 0;
        // Manual smooth scrolling because browsers don't support without allowing it first
        // https://stackoverflow.com/questions/62098093/scroll-behaviour-smooth-not-working-at-all
        const inter = setInterval(() => {
          if (window.scrollY < 270) {
            addition += window.scrollY * 0.06 + 1;
          } else {
            addition += (400 - window.scrollY) * 0.03;
          }
          if (window.scrollY >= 400) {
            clearInterval(inter);
          }
          window.scroll({
            top: addition,
            left: 0,
            behavior: "smooth",
          });
        }, 10);
      }, 2000);
    }, 3000);
  }, []);
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
      {showScreen && (
        <categoryContext.Provider value={{ category, setCategory }}>
          <NavBar />
          <div
            style={{
              marginTop: "150px",
              textAlign: "left",
            }}
          >
            <div className="catchCont">
              <div className="catchText">
                More <b>variety</b>
              </div>
              <div className="catchText">
                Better <b>price</b>
              </div>
              <div className="catchText">
                Better <b>place</b>
              </div>
              <button
                onClick={() => {
                  setShowScreen(false);
                  canvasContRef.current.style.zIndex = 1;
                }}
                className="modelView"
              >
                View Model{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="container listings"
            style={{ backgroundColor: "#fff" }}
          >
            {isLoading ? (
              <Gears />
            ) : items.length ? (
              items.map(({ name, desc, price, imgsrc, rating, type, _id }) => (
                <Card
                  key={_id}
                  images={[`http://localhost:5000/uploads/${imgsrc}`]}
                  name={name}
                  rating={`${rating}.0/5`}
                  type={type}
                  desc={desc}
                  price={price}
                />
              ))
            ) : (
              <div style={{ margin: "100px auto" }}>404 not found</div>
            )}
          </div>
          <Footer />
        </categoryContext.Provider>
      )}
    </>
  );
}

export default App;

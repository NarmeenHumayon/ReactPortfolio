import { useState } from "react";
import "./NavBar.css";
import StaysButton from "./StaysButton";
import ProfileOps from "./Profile";
import Categories from "./Categories/Categories";
import SearchBar from "./SearchBar/SearchBar";
function NavBar() {
  const [currentOpt, setOpt] = useState("stays");
  return (
    <>
      <div className="nav">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="airbnb.png" width={70} />
          <div>
            <StaysButton
              text={"Stays"}
              onbuttonclick={() => setOpt("stays")}
              isSelected={currentOpt == "stays"}
            />
            <StaysButton
              text={"Experiences"}
              onbuttonclick={() => setOpt("experiences")}
              isSelected={currentOpt == "experiences"}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <SearchBar placeholder={"Enter Location"} />
            <ProfileOps />
          </div>
        </div>
        <Categories />
      </div>
    </>
  );
}

export default NavBar;

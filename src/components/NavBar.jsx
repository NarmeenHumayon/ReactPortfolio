import { useState } from "react";
import "./NavBar.css";
import StaysButton from "./StaysButton";
import ProfileOps from "./Profile";
function NavBar() {
  const [currentOpt, setOpt] = useState("stays");
  return (
    <>
      <div className="nav">
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
        <div>
          <ProfileOps />
        </div>
      </div>
    </>
  );
}

export default NavBar;

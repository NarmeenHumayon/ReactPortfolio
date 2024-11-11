import { useRef, useState } from "react";
import "./LogIn.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

const LogIn = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [accesstoken, saveAccessToken] = useLocalStorage("accesstoken");
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post("http://127.0.0.1:5000/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        if (data.data.status === 200) {
          saveAccessToken(data.data.message);
          window.location.reload();
        } else {
          setError(data.data.message);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="auth">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Log In</p>
        <div className="input-container">
          <input ref={usernameRef} placeholder="Enter username" required />
          <span></span>
        </div>
        <div className="input-container">
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="error">{error}</div>
        <button type="submit" className="submit">
          Log in
        </button>

        <p className="signup-link">
          No account?
          <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};
export default LogIn;

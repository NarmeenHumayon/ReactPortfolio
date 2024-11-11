import { useRef, useState } from "react";
import "./Register.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

const Register = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const emailRef = useRef();
  const [accesstoken, saveAccessToken] = useLocalStorage("accesstoken");
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    axios
      .post("http://127.0.0.1:5000/register", {
        username: username,
        password: password,
        email: email,
      })
      .then((data) => {
        if (data.status === 200) {
          saveAccessToken(data.data.message);
          window.location.reload();
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="auth">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Register</p>
        <div className="input-container">
          <input ref={usernameRef} placeholder="Enter username" required />
          <span></span>
        </div>
        <div className="input-container">
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
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
        <button type="submit" className="submit">
          register
        </button>
        <div className="error">{error} </div>
        <p className="signup-link">
          Already have an account?
          <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );
};
export default Register;

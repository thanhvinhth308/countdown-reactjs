import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //hàm kiểm tra tài khoản
  const handleAccountCheck = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setMessage("");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      onLogin({ username, password });
    } else {
      setMessage("Tài khoản hoặc mật khẩu của bạn không chính xác");
    }
  };
  return (
    <div className="LoginForm">
      <div className="loginBox">
        <form action="" onSubmit={handleAccountCheck}>
          <h2>Login</h2>
          <div className="loginInput">
            <input
              type="text"
              name="Username"
              id="userName"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="Username">Username</label>
          </div>
          <div className="loginInput">
            <input
              id="password"
              type="Password"
              name=""
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Password</label>
          </div>
          <div id="loginStatus">
            <span>{message}</span>
          </div>
          <button type="submit" href="">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;

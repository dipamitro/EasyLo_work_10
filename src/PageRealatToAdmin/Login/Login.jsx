import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "./main.css";
import "./util.css";
import Justforcheck from "./justforcheck";
import AdminDeshBoard from "../AdminDeshBoard/AdminDeshBoard";
const Login = () => {
  const [userToken, setUserToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginUrl = "https://restaurantapi.bssoln.com/api/Auth/SignIn";
    const userData = {
      userName: username,
      password: password,
    };

    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token;
        setUserToken(token);
        console.log("Logged in and token stored.");
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  const handleAccessDashboard = () => {
    const dashboardUrl = "https://restaurantapi.bssoln.com/api/AdminDashboard";

    fetch(dashboardUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((dashboardData) => {
        console.log("Admin Dashboard Data:", dashboardData);
        history.push("/adminDeshBoard");
        // Display the dashboard data on the webpage
      })
      // .catch(error => {
      //   console.error('Dashboard Error:', error);
      // });
      .catch((error) => {
        console.error("Dashboard Error:", error);
      });
  };
  return (
    <div className="bod2y1">
            {userToken ? (
              <div>
                <div onClick={handleAccessDashboard}>
                  <AdminDeshBoard />
                </div>
              </div>
            ) : (
              <div className="body1">
                <div className="limiter">
                  <div className="container-login100">
                    <div className="wrap-login100">
                      <div
                        className="login100-form-title"
                        style={{
                          backgroundImage:
                            "url(	https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg)",
                        }}
                      >
                        <span className="login100-form-title-1">Sign In</span>
                        <span className="login100-form-title-1">ChikenKo</span>
                      </div>
                      <div className="login100-form validate-form">
                        <div
                          className="wrap-input100 validate-input m-b-26"
                          data-validate="Username is required"
                        >
                          <span className="label-input100">Username</span>
                          <input
                            className="input100"
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                          />
                          <span className="focus-input100" />
                        </div>
                        <div
                          className="wrap-input100 validate-input m-b-18"
                          data-validate="Password is required"
                        >
                          <span className="label-input100">Password</span>
                          <input
                            className="input100"
                            type="password"
                            name="pass"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <span className="focus-input100" />
                        </div>
                        <div className="flex-sb-m w-full p-b-30">
                          <div className="contact100-form-checkbox">
                            <input
                              className="input-checkbox100"
                              id="ckb1"
                              type="checkbox"
                              name="remember-me"
                            />
                            <label className="label-checkbox100" htmlFor="ckb1">
                              Remember me
                            </label>
                          </div>
                          <div>
                            <a
                              href="https://colorlib.com/etc/lf/Login_v15/index.html#"
                              className="txt1"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div className="container-login100-form-btn">
                          <button
                            onClick={handleLogin}
                            className="login100-form-btn"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        <AdminDeshBoard />
    </div>
  );
};

export default Login;

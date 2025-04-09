import React, { useEffect, useState } from "react";
import logo from "../img/Instagram_text_logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Toast functions

  const notifyA = (msg) => {
    toast.error(msg);
  };
  const notifyB = (msg) => {
    toast.success(msg);
  };

  //for email vaildation
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //for strong password
  const strPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  const hovbtn = () => {};

  const postData = () => {
    if (!emailRegex.test(email)) {
      notifyA("Please enter valid email");
      return;
    } else if (!strPass.test(password)) {
      notifyA(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          navigate("/signin");
        }
        console.log(data);
      });
  };

  return (
    <div className="signUp">
      <div className="form_container">
        <div className="form">
          {/* <img className="signUplogo" src={logo} /> */}
          <div className="text_logo_signup">
            <i>Moments</i>
          </div>

          <p className="login_para">
            Sign up to see photos and videos <br /> from your friends
          </p>

          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <p
            className="login_para"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up you agree to our terms <br /> privacy policy and
            cookies policy
          </p>
          <div>
            <input
              type="submit"
              id="submit-btn"
              value="Sign Up"
              onClick={() => {
                postData();
              }}
            />
          </div>
        </div>

        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "#00AEEF", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

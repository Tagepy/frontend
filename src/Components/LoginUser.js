import React, { useContext, useRef, useState } from "react";
import MainContext from "../Context/MainContext";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const emailRef = useRef();
  const pass1Ref = useRef();

  const { getUsers, setCurrentUser } = useContext(MainContext);

  const nav = useNavigate();
  const [error, setError] = useState(null);

  async function auth() {
    const userData = {
      email: emailRef.current.value,
      password: pass1Ref.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const res = await fetch("http://localhost:4000/login", options);
    const data = await res.json();
    console.log(data);
    if (data.success) {
      nav("/");
    } else {
      setError(data.message);
    }

    const user = getUsers.find(
      (x) => x.username === userData.email && x.password === userData.password
    );

    if (user) {
      setCurrentUser(user);
    }
    if (data.success) {
      nav("/");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="d-flex column w300">
      <input type="text" ref={emailRef} placeholder="email" />
      <input type="text" ref={pass1Ref} placeholder="pass 1" />
      <button onClick={auth}>Login</button>
      <h3>{error}</h3>
    </div>
  );
};

export default LoginUser;

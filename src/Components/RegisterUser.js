import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../Context/MainContext";

const RegisterUser = () => {
  const nav = useNavigate();
  const emailRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();

  const { getUsers, setUsers } = useContext(MainContext);
  const [error, setError] = useState(null);

  async function auth() {
    const registerUser = {
      email: emailRef.current.value,
      pass1: pass1Ref.current.value,
      pass2: pass2Ref.current.value,
    };
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerUser),
    };
    const res = await fetch("http://localhost:4000/register", options);
    const data = await res.json();
    console.log(data);

    if (emailRef.current.value.length > 20 && emailRef.current.value.length < 3)
      return;
    if (
      pass1Ref.current.value !== pass2Ref.current.value &&
      pass1Ref.current.value.length < 5
    )
      return;

    const user = {
      email: emailRef.current.value,
      password: pass1Ref.current.value,
    };

    setUsers([...getUsers, user]);
    if (data.success) {
      nav("/login");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="d-flex column w300">
      <input type="text" ref={emailRef} placeholder="email" />
      <input type="text" ref={pass1Ref} placeholder="pass 1" />
      <input type="text" ref={pass2Ref} placeholder="pass 2" />
      <button onClick={auth}>Register</button>
      <h3>{error}</h3>
    </div>
  );
};

export default RegisterUser;

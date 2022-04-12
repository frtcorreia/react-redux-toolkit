import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../store";

export const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name));
  };

  return (
    <>
      <h1 className="mt-5">Login</h1>
      <div>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

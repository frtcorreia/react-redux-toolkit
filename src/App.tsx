import React from "react";
import { useSelector } from "react-redux";
import { Counter, Login, Logout, User } from "./components";
import { selectUser } from "./store/User";

export const App: React.FC = () => {
  const { isLogged } = useSelector(selectUser);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isLogged ? (
        <Login />
      ) : (
        <>
          <User />
          <br />
          <Logout />
        </>
      )}

      <br />
      <Counter />
    </div>
  );
};

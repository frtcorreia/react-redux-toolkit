import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store";

export const User = () => {
  const { user } = useSelector(selectUser);

  return (
    <div>
      <h1>Welcome: {user}</h1>
    </div>
  );
};

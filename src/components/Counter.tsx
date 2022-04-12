import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCounter } from "../store";

export const Counter = () => {
  const { counter } = useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
};

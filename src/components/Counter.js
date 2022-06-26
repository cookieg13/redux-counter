import "../App.css";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>⏰Counter App⏰</h1>
      <div style={{ fontSize: 35 }}>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        &nbsp;{counter}&nbsp;
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;

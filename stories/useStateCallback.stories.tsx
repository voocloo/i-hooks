import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { useStateCallback } from "../src/index";

const App = () => {
  const [state, setState] = useStateCallback(0);
  const [ result , setResult ] = useState(state + 1)
  function handler() {
    setState(state => state + 1, (state) => {
      setResult(state + 1)
    })
  }

  return (
    <>
      <span>结果+1 ：{result}</span>
      <button onClick={handler}>点击+1 ：{state} </button>
    </>
  );
};

storiesOf("useStateCallback", module).add("App", App);

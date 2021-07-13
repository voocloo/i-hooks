import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import {  useToggle } from "../src/index";

const App = () => {
  const [state, setState] = useToggle();   

  return (
    <>
      <span>{state ? 'show' : 'hide'}</span>
      <button onClick={()=>setState()}>toggle</button>
    </>
  );
};

storiesOf("useToggle", module).add("App", App);

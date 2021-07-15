import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { useWindowSize } from '../src/index'

const App = () => {
  const {width,height} = useWindowSize();   

  return (
    <>
      <span>{width} {height}</span> 
    </>
  );
};

storiesOf("useWindowSize", module).add("App", App);

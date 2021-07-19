import React, { useEffect } from "react";
import { storiesOf } from "@storybook/react"; 
import { useRect } from "../src";
const App = () => { 
  const rect = useRect(document.querySelector(".test"));
  useEffect(() => {
    console.log(rect);
  }, [rect]);
  return (
    <>
      <span>{null}</span>
      <div className="test" >
        12121
      </div>
    </>
  );
};

storiesOf("useRect", module).add("App", App);

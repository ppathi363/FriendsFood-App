import React from "react";
import FourthComponent from "./FourthComponent";
import { useData } from "../Practice folder/Contexthook";

const ThirdComponent = () => {
  const { suprise } = useData();
  return (
    <div>
      ThirdComponent
      <h2>My name is {suprise}</h2>
      <FourthComponent />
    </div>
  );
};

export default ThirdComponent;

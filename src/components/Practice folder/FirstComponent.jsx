import React, { useState } from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = () => {
  const [state, setState] = useState(0);

  const Increment = () => {
    setState((prevState) => prevState + 1);
  };

  const Decrement = () => {
    setState((prevState) => Math.max(0, prevState - 1));
  };

  const Reset = () => {
    setState(0);
  };
  return (
    <div>
      <p>Count :{state}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <SecondComponent />
    </div>
  );
};

export default FirstComponent;

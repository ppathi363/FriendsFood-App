import { useEffect, useState } from "react";
import Practice from "./Practice";

const TernaryOperatoer = () => {
  const [operator, setOperator] = useState("0");

  return <div>{operator === "new" ? <Practice /> : "This is false"}</div>;
};

const Parent = () => {
  const [city, SetCity] = useState("Hyderabad");

  useEffect(() => {
    if (city === "Hyderabad") {
      SetCity("Delhi");
    } else {
      SetCity("My");
    }
  }, [city]);

  return (
    <div>
      <h1>I Live in {city}</h1>
      <TernaryOperatoer />
    </div>
  );
};

export default Parent;

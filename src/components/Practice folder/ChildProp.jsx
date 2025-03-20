import React from "react";

const ChildProp = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.dob}</p>
      <p>{props.year}</p>
    </div>
  );
};

export default ChildProp;

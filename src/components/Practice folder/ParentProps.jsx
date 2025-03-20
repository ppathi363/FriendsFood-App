import React from "react";
import ChildProp from "./ChildProp";

const ParentProps = () => {
  let userdata = [
    {
      name: "Deep",
      dob: "08/15",
      year: "1996",
    },
  ];

  return (
    <div>
      <ChildProp
        name={userdata[0].name}
        dob={userdata[0].dob}
        year={userdata[0].year}
      />
    </div>
  );
};

export default ParentProps;

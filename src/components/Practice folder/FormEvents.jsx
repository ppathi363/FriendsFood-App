import React, { useState } from "react";
import "./FormEvents.css";

const FormEvents = () => {
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const GetUserName = (event) => {
    setUserName(event.target.value);
  };
  const PutUserName = () => {
    setNewUserName(userName);
  };

  const ResetUserName = () => {
    setNewUserName("");
    setUserName("");
  };

  return (
    <section class="Body">
      <h1>{newUserName}</h1>
      <div className="inputDiv">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={GetUserName}
          value={userName}
        />
        <br />
        <button className="btnClass" onClick={PutUserName}>
          Submit
        </button>
        <button onClick={ResetUserName}>Reset</button>
      </div>
    </section>
  );
};

export default FormEvents;

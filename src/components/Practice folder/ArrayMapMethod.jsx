import React from "react";
import "./FormEvents.css";
import { UserDetails } from "../data";

const ArrayMapMethod = () => {
  let players = [
    {
      Father: "Mahender",
      Mother: "Sujatha",
      Brother: "Sandeep",
      Sisterinlaw: "Divya",
    },
  ];
  return (
    <div>
      {players.map((name) => {
        return (
          <div className="Namescss">
            <h1>{name.Father}</h1>
            <h1>{name.Mother}</h1>
            <h1>{name.Brother}</h1>
            <h1>{name.Sisterinlaw}</h1>
            <div>
              {UserDetails.map((user) => {
                return (
                  <div>
                    <h1>{user.postId}</h1>
                    <h1>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.body}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayMapMethod;

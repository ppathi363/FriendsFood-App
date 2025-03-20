import React, { useEffect, useState } from "react";
//import { UserDetails } from "../data";

const UserDetails = "https://jsonplaceholder.typicode.com/posts";

const Practice = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("this is my name");

  useEffect(() => {
    setName("my name is Pradeep");
  }, [name]);

  const userHandler = async () => {
    try {
      const response = await fetch(UserDetails);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const newData = await response.json();
      setUser(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    userHandler();
  }, []);

  return (
    <div>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h2 style={{ color: "beige" }}>{item.userId}</h2>
            <h2 style={{ color: "green" }}>{item.id}</h2>
            <h2 style={{ color: "red" }}>{item.title}</h2>
            <h2 style={{ color: "blue" }}>{item.body}</h2>
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Practice;

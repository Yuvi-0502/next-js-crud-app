"use client";

import { useState } from "react";
import "./adduser.css";
const Page = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
  });
  const handleEvent = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const addUser = async () => {
    const data = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify(input),
    });
    const response = await data.json();
    alert(`New user added. Hello, ${response.result.name}`);
  };
  return (
    <>
      <div className="add-user">
        <h1>Add user Page</h1>
        <input
          type="text"
          placeholder="Enter Name"
          className="input-field"
          onChange={handleEvent}
          name="name"
          value={input.name}
        />
        <input
          type="number"
          placeholder="Enter Age"
          className="input-field"
          onChange={handleEvent}
          name="age"
          value={input.age}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
          onChange={handleEvent}
          name="email"
          value={input.email}
        />
        <button className="btn" onClick={addUser}>
          Add User
        </button>
      </div>
    </>
  );
};

export default Page;

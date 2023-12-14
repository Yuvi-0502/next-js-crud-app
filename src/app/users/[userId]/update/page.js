"use client"
import { useEffect, useState } from "react";
import "@/app/adduser/adduser.css"

export default function Page({ params }) {
  const id = params.userId;
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
  const updateUser = async () => {
    const data = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "Put",
      body: JSON.stringify(input),
    });
    const response = await data.json();
    if(response.result.name)
      alert(`User updated. Hello, ${response.result.name}`);
    
      alert(response.result)
  };

  const getUser = async() =>{
    const data = await fetch(`http://localhost:3000/api/users/${id}`);
    const response = await data.json();
    const user = response.result[0];
    setInput({
        name:user.name,
        age:user.age,
        email:user.email
    })
}

  useEffect(()=>{
   getUser();
  },[])
  return (
    <div className="add-user">
      <h1>Update User Details</h1>
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
      <button className="btn" onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}

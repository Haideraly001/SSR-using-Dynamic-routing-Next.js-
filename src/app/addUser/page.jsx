"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    const data = fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    data.then((response) => response.json()).then((resp) => console.log(resp));

    // const data = await fetch("http://localhost:3000/api/hello", {
    //   method: "POST",
    //   body: JSON.stringify({ name, age, email }),
    // });
    // let resp = await data.json();
    // console.log(resp);
  };

  return (
    <div>
      <h2>Enter your Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={addUser}>Submit</button>
    </div>
  );
};

export default page;

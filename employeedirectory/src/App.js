import React, { Component } from "react";
import Title from "./components/Title";
import Table from "./components/Table";


const users = [
  {
    "id": 1,
    "image": "",
    "first": "Carl",
    "last": "Carlson",
    "email": "cc@email.com",
    "dob": "1999-12-12"
  },
  {
    "id": 2,
    "image": "",
    "first": "Lenny",
    "last": "Lawrenson",
    "email": "LL@email.com",
    "dob": "1999-11-11"
  },
]

function App() {
  return (
    <Title>Employee Directory</Title>
  );
}

export default App;

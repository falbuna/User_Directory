import React, { Component } from "react";
import Title from "./components/Title";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import users from "./users.json";
// import { render } from "react-dom";



function App() {
  return (
    <div>
    <Title>Employee Directory</Title>
    <p> Add some text here! </p>
    <Table />
    </div>
  );
}


export default App;

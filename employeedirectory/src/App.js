import React, { Component } from "react";
import Title from "./components/Title";
import Table from "./components/Table";
import users from "./users.json";
// import { render } from "react-dom";

class App extends Component {
  state = {
    users
  };


render() {
  return (
    <div>
    <Title>Employee Directory</Title>
    {this.state.users.map(user => (
    <Table 
      first={user.first}
      last={user.last}
      phone={user.phone}
      email={user.email}
      dob={user.dob}
    />
    ))}
    </div>
  );
}
}

export default App;

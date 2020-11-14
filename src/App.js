import React from "react";
import Title from "./components/Title";
import UserTable from "./components/UserTable";
// import Wrapper from "./components/Wrapper";
// import users from "./users.json";
// import { render } from "react-dom";


function App() {
  return (
    <div>
    <Title>Employee Directory</Title>
    <p>Enter a name in the search bar to filter by the first name of the user.</p>
    <UserTable />
    </div>
  );
}


export default App;

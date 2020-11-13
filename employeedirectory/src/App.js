import React from "react";
import SearchForm from "./components/SearchForm";
import Title from "./components/Title";
import UserTable from "./components/UserTable";
// import Wrapper from "./components/Wrapper";
// import users from "./users.json";
// import { render } from "react-dom";



function App() {
  return (
    <div>
    <Title>Employee Directory</Title>
    <SearchForm />
    <UserTable />
    </div>
  );
}


export default App;

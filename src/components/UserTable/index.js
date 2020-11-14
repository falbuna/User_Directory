import React, { Component } from "react";
import API from "../../utils/API"
import UserData from "../UserData";
import SearchForm from "../SearchForm";
import "./style.css";


class UserTable extends Component {
    state = {
        users: [],
        value: "",
        displayUserArray: []
    };

componentDidMount(){
    this.loadUsers();
}


loadUsers = () => {
    API.getUsers()
        .then(res => {
            this.setState({ 
                users: res.data.results,
                displayUserArray: res.data.results
            })
        })
        .catch(err => console.log(err));
};


handleInputChange = event => {
    this.setState({ value: event.target.value});
    this.setState({ displayUserArray: this.checkName(event.target.value) })
};

handleFormSubmit = event => {
    event.preventDefault();
    
    }


sortName = event => {
    switch (event.target.innerHTML) {
        case "Name":
            this.state.displayUserArray.sort(function (a, b) {
                var textA = a.name.first;
                var textB = b.name.first;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            this.setState({ displayUserArray: this.state.users })
            break;
        default:
            break;
    }
}

checkName = (value) => {
    return this.state.users.filter(user => user.name.first.includes(value))
}

render(){
    return (
        <div>
        <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
        />
        <p>Sort the names by alphabetical order.</p>
        <table id="users">
        <thead>
            <tr>
            <th>Picture</th>
            <th onClick={this.sortName}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            </tr>
        </thead>
        <tbody>
            { 
            this.state.displayUserArray.map(( user, index) => (
            <UserData key={index}
            image={user.picture.thumbnail}
            last={user.name.last}
            first={user.name.first}
            phone={user.phone}
            email={user.email}
            dob={(user.dob.date).substring(0,10)}
            />
            ))}
            </tbody>
        </table>
        </div>
    )
}
}

export default UserTable;
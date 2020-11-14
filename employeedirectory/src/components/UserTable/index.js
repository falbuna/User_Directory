import React, { Component } from "react";
import API from "../../utils/API"
import UserData from "../UserData";
import SearchForm from "../SearchForm";
import "./style.css";


class UserTable extends Component {
    state = {
        users: [],
        value: ""
    };

componentDidMount(){
    this.loadUsers();
}


loadUsers = () => {
    API.getUsers()
        .then(res => {
            this.setState({ users: res.data.results })
            // console.log(res.data.results)
        })
        .catch(err => console.log(err));
};



handleInputChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
};

handleFormSubmit = event => {
    event.preventDefault();
    
    }


sortName = event => {
    switch (event.target.innerHTML) {
        case "Name":
            this.state.users.sort(function (a, b) {
                var textA = a.name.first;
                var textB = b.name.first;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            this.setState({ users: this.state.users })
            break;
    
        default:
            break;
    }
}

checkName = () => {
    return this.state.users.includes(this.state.value)
}

render(){
    return (
        <div>
        <SearchForm
            value={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
        />
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
            { this.state.users.map(( user, index) => (
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
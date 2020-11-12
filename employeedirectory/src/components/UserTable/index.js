import React, { Component } from "react";
import API from "../../utils/API"
import UserData from "../UserData";
import "./style.css";


class UserTable extends Component {
    state = {
        users: []
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

render(){
    return (
        <div>
        <table id="users">
            <th>Picture</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
        <tbody>
            {console.log(this.state.users)}
            { this.state.users.map(user => (
            <UserData
            image={user.picture.thumbnail}
            last={user.name.last}
            first={user.name.first}
            phone={user.phone}
            email={user.email}
            dob={user.dob.date}
            />
            ))}
            </tbody>
        </table>
        </div>
    )
}
}

export default UserTable;
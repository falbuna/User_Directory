import React, { Component } from "react";
import API from "../../utils/API"
import UserData from "../UserData";

class UserTable extends Component {
    state = {
        user: {},
    };

componentDidMount(){
    this.loadUsers();
}


loadUsers = () => {
    API.getUsers()
        .then(res => {
            this.setState({ user: res.data.results[0] })
            console.log(res.data.results[0])
            console.log(res.data.results[0].name.last)
            console.log(res.data.results[0].name.first)
            console.log(res.data.results[0].phone)
            console.log(res.data.results[0].email)
            console.log(res.data.results[0].dob.date)
            console.log(res.data.results[0].picture.thumbnail)
        })
        .catch(err => console.log(err));
};

render(){
    return (
        <div>
            <p>Test</p>
            <UserData
            last={this.state.user.phone}
            // first={this.state.user.name.first}
            phone={this.state.user.phone}
            email={this.state.user.email}
            // dob={this.state.user.dob.date}
            />
        </div>
    )
}
}

export default UserTable;
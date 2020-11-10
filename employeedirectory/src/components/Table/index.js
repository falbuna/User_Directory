import React, { Component } from "react";
import users from "../../users.json";
// import API from "../../utils/API";
// import UserData from "../UserData";
import "./style.css";

class Table extends Component {
    constructor(props){
    super(props)
    this.state = {
      users
    }
}

    renderTableHeader(){
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData(){
        return this.state.users.map((user, index) => {
            const { first, last, phone, email, dob } = user
            return (
                <tr>
                    <td>{first}</td>
                    <td>{last}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{dob}</td>
                </tr>
            )
        })
    }

render(){
    return (
    <div>
    <table id="users">
        <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
        </tbody>
    </table>
    </div>
    )
}
}

export default Table;
import React from "react";

function Table(props){
    return (
            <div class="container">           
            <table class="table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.first}</td>
                    <td>{props.last}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>
                </tbody>
            </table>
            </div>
    )
}

export default Table;
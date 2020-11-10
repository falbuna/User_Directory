import React from "react";

function UserData(props){
    return(
    <div>
    <p>Name: {props.last},{props.first}</p>
    <p>Phone: {props.phone}</p>
    <p>Email: {props.email}</p>
    <p>DOB: {props.dob}</p>
    </div>
    )
}

export default UserData;
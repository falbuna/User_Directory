import React from "react";
import "./style.css";

function SearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an Employee"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;
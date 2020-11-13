import React from "react";
import "./style.css";

function SearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search an Employee"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;
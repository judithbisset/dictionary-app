import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
    
    let [keyword, setKeyword] = useState("");
    function handleResponse(response) {
        console.log(response.data[0]);

    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function search(event) {
        event.preventDefault();
       
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }
return(
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}></input>
        </form>
    </div>);
}
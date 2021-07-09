import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary(props) {
    
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);


    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return(
    <div className="Dictionary">
        <section>
            <h1>What word would you like to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}></input>
        </form>
        <div className="hint">
            suggested words: kiwi, travel, trip, food...
        </div>
        </section>
        <Results results={results} />
    </div>);

    }
    else {
        load();
        return "Loading";
    }
    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
       
        
    }

}
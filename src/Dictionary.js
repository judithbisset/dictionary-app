import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary(props) {
    
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);


    }
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos)
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
        <Photos photos={photos} />
    </div>);

    }
    else {
        load();
        return "Loading";
    }
    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiURL).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f917000010000017d8e61a09e194027894a82b43127cf2b";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {
            Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
       
        
    }

}
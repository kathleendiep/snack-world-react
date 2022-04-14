import { useState } from 'react'
import React from 'react';
import './searchBar.css'
// import SingleItemComponent from '../voyagerContainer/singleItemComponent/singleItemComponent';
// import NewVoyagerComponent from '../voyagerContainer/newVoyagerComponent/newVoyagerComponent';
const SearchBar = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const [searchInput, setSearchInput] = useState("");
    const [matchResults, setMatchResults] = useState([])
    // 4. see if input is valid 
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    // setSearchInput function to equal to what was put in the search bar  e.target.value (put into search bar )
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        console.log(e.target.value)
    };

    const submitSearch = (e) => {
        e.preventDefault();
        if (searchInput.length > 2) {
            // we put searchInput to lowercase 
            const _searchInput = searchInput.toLowerCase()
            // we filter through voyagers and we find 
            const results = props.voyagers.filter(voyager => {
                // if it starts with searchInput 
                if (voyager.city.toLowerCase().indexOf(_searchInput) === 0) {
                    return true
                }
                // todo: name, categories
                return false
            })

            setSearchResults(results)
        }
        return;
    }
    // if there is no searchInput, return voyagers prop, if not return searchResults
    // ! = not 
    const voyagers = !searchInput ? props.voyagers : searchResults
    return (
        <div>
            <div class="section-head col-sm-12">
                <h4><span>Search Snacks</span></h4>
                <p>by category!</p>
            </div>
            <form onSubmit={submitSearch}>
                <input onChange={handleChange} type="search" placeholder="Search here" value={searchInput} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default SearchBar;
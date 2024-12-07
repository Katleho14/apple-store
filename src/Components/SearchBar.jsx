import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
       onSearch(query);
    };

   

    return (
        <div className="dashboard">
            <div className="top-bar">
                <div className="label-1">
                    <span className="label">Search Item</span>
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
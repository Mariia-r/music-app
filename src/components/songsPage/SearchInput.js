import React from "react";
import {compose} from "redux";
import './SearchInput.scss';

const SearchInput = ({filterText, setFilterText}) => {
    return (
        <div className="search-input">
            <input value={filterText}
                   placeholder="Filter songs..."
                   onChange={(e) => setFilterText(e.target.value)}/>
        </div>
    );
}

export default compose(React.memo)(SearchInput);
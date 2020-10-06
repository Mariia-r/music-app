import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import './SongsPage.scss';
import {acGetSongs} from "../../store/songs-reducer";
import Songs from "./Songs";
import SearchInput from "./SearchInput";

const SongsPage = ({songs, acGetSongs}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        acGetSongs();
        setTimeout(() => {
            setIsLoaded(true);}, 1000);
        }, []
    );

    let filteredSongs = songs.filter((song) => song.title.label.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

    return (
        <div className="songs-page container">
            <SearchInput filterText={filterText} setFilterText={setFilterText}/>
            {isLoaded ? <Songs songs={filteredSongs}/> : "Loading"}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        songs: state.songsPage.songs
    }
}

export default compose(
    connect(mapStateToProps, {acGetSongs}),
    React.memo
)(SongsPage);

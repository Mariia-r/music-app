import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import './SongsPage.scss';
import {acGetSongs} from "../../store/songs-reducer";

const SongsPage = ({songs, acGetSongs}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        acGetSongs();
            setTimeout(() => {
                setIsLoaded(true);}, 2000);
        }, []
    );

    console.log(songs)

    return (
        <div className="songs-page">
            {isLoaded ? "Songs Page" : "Loading"}
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

import React from "react";
import './Songs.scss';
import {connect} from "react-redux";
import {acLikeUnlikeSong} from "../../store/songs-reducer";

const Songs = ({songs, acLikeUnlikeSong}) => {
    console.log(songs)
    return (
        <div className="songs-list">
            {songs.map((song, index) => {
                return (
                    <div key={index} className="song-item">
                        <span className="song-item-number">{index + 1}</span>
                        <span className="artist-name">{song["im:artist"].label}</span>
                        <span> &ndash; {song["im:name"].label}</span>
                        <button className={`icon-reaction ${song.like ? "unlike" : "like"}`} onClick={(e) => {acLikeUnlikeSong(song.title.label)}}/>
                    </div>
                );
            })}
        </div>
    );
}

export default connect(null, {acLikeUnlikeSong})(Songs);
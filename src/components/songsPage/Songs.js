import React, {useState, useEffect} from "react";
import './Songs.scss';
import {connect} from "react-redux";
import {acLikeSong} from "../../store/songs-reducer";

const Songs = ({songs, acLikeSong}) => {
    return (
        <div className="songs-list">
            {songs.map((song, index) => {
                return (
                    <div key={index} className="song-item">
                        <span className="song-item-number">{index + 1}</span>
                        <span className="artist-name">{song["im:artist"].label}</span>
                        <span> &ndash; {song["im:name"].label}</span>
                        <span className="icon-like" onClick={(e) => {acLikeSong(song.title.label)}}>
                            {song.like ? "Unlike" : "Like"}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default connect(null, {acLikeSong})(Songs);
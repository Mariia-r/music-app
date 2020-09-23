import React, {useState, useEffect} from "react";
import './Songs.scss';

const Songs = ({songs}) => {
    console.log(songs)
    return (
        <div className="songs-list">
            {songs.map((song, index) => {
                return (
                    <div key={index} className="song-item">
                        <span className="song-item-number">{index + 1}</span>
                        <span className="artist-name">{song["im:artist"].label}</span>
                        <span> &ndash; {song["im:name"].label}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Songs;
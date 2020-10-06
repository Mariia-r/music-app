import React from "react";
import './Songs.scss';
import {connect} from "react-redux";
import {acLikeUnlikeSong} from "../../store/songs-reducer";

const Songs = ({songs, acLikeUnlikeSong}) => {
    if (songs.length > 0) {
        return (
            <div className="songs-list">
                {songs.map((song, index) => {
                    return (
                        <div key={index} className="song-item">
                            <div className="song-item-number">
                                <span>{index + 1}</span>
                            </div>
                            <span className="artist-name">{song["im:artist"].label}</span>
                            <span> &ndash; {song["im:name"].label}</span>
                            <button className={`icon-reaction ${song.like ? "unlike" : "like"}`} onClick={(e) => {acLikeUnlikeSong(song.title.label)}}/>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return <div>Sorry, no songs were found.</div>
    }

}

export default connect(null, {acLikeUnlikeSong})(Songs);
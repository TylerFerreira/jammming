import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            {/* <!-- Add a TrackList component --> */}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
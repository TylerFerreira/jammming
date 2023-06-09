import React from "react";
import "./Track.css";

function Track(props) {
    function renderAction() {
        if (props.isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>;
        }
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>track name will go here</h3>
                <p>track artist will go here | track album will go here</p>
            </div>
            <button className="Track-action">+</button>
        </div>
    );
}

export default Track;
import './WebPlayer.css';
import React from "react";
import ReactPlayer from "react-player";

function WebPlayer(props) {
    return (
        <div>
            <ReactPlayer
                className='react-player fixed-bottom'
                url={props.url}
                width='100%'
                height='100%'
                controls = {true}
            />
        </div>
    );
}

export default WebPlayer;

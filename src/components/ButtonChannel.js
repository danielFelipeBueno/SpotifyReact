import React from 'react';
import '../App.css'
export default function ButtonChannel(){
    return(
        <div className="ButtonChannel">
            <div className="Button" id="PlayButton">
                <i class="fa-solid fa-circle-play"></i>
            </div>
            <div className="Button" id="LikeButton">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div className="Button" id="OptionsButton">
            ...
            </div>
        </div>
    )
}
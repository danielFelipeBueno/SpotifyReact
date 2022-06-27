/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../App.css'
export default function Player({currentClip}){
    return (
        <div className="PlayerFooter">
            <div className="InfoAlbum">
                <div className="AlbumPhoto">
                    { currentClip.image === undefined 
                    ?<i class="fa-solid fa-image"></i>
                    :<img src={currentClip.image} alt='No image'/>}
                    
                </div>
                <div className="Info">
                    <h3>{ currentClip.title === '' ?'Title':currentClip.title }</h3>
                    <h4>{ currentClip.author === '' ?'Author':currentClip.author }</h4>
                </div>
                <div className="Icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className="Player">
                <figure className="Figure">
                    <audio className="Audio"
                        controls
                        src={currentClip.mp3}
                        autoPlay={currentClip.autoPlay}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </figure>
            </div>
        </div>
    )
}
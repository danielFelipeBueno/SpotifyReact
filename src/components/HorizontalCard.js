import React from 'react';
import '../App.css'
export const HorizontalCard = ({ channel, setIsHome, setSelected }) =>{
    var urls = channel.urls;
    var logo = Object.values(urls);
    logo = logo[1].original
    return (
        <div className="HorizontalCard">
            <a href
            style={{cursor:'pointer'}}
            onClick={()=> {
                //* set var state isHome / change page
                setIsHome('channel')
                //* set var state with selected id for request
                setSelected(channel)
            }}>
                <div className="image">
                    <img src = { logo }
                    alt={channel.type}/>
                    <h3 style={{color:'white'}} className="title">{channel.title}</h3>
                    <i class="fa-solid fa-circle-play"></i>
                </div>
            </a>
        </div>
    )
}
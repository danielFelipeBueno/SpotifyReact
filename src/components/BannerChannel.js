import React from 'react';
import '../App.css'
export default function BannerChannel({channel}){
    const logo = channel['urls']['logo_image'].original;
    const banner = channel['urls']['banner_image'].original;
    return (
        <div className="BannerChannel">
                <div className="PhotoAlbum">
                    <img src = { logo }
                    alt={channel['id']}/>
                </div>
                <div className="InfoChannel">
                    <ul>
                        <li>
                            <h3>{ channel['channel_style'] }</h3>
                        </li>
                        <li>
                            <h1>{channel['title']}</h1>
                        </li>
                        <li>
                            <h4 >{ channel['description'] }</h4>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
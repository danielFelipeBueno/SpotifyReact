import React from 'react';
import '../App.css';
import { useChannels } from '../hooks/useChannels';
export default function ListScreens({setIsHome, setSelected, isHome}){
    const { channels } = useChannels(0,10);
    return (
        <div className="ListScreens">
            <ul>
                <li>
                    <h3>
                        <a href
                        style={{cursor:'pointer'}}
                        onClick={()=>
                            //* set var state isHome / change page
                            setIsHome('home')
                        }>
                            <i class="fa-solid fa-house"></i>Home
                        </a>
                    </h3>
                </li>
                
            </ul>
            <hr class="solid"></hr>
            {isHome === 'home'
            ?<ul>
                {channels.map( channel => (
                    <li className="ChannelList">
                        <a href
                        style={{cursor:'pointer'}}
                        onClick={()=> {
                            //* set var state isHome / change page
                            setIsHome('channel')
                            //* set var state with selected id for request
                            setSelected(channel)
                        }}>
                            {channel.title}
                        </a>
                        
                    </li>
                ))}
            </ul>
            :null}
        </div>
    )
}
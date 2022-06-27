import React from 'react';
import '../App.css';
import { useChannels } from '../hooks/useChannels';
export default function ListScreens({setIsHome, setSelected}){
    const { channels } = useChannels(0,10);
    console.log('MENU');
    console.log(channels);
    return (
        <div className="ListScreens">
            <ul>
                <li>
                    <h3>
                        <a href
                        style={{cursor:'pointer'}}
                        onClick={()=>
                            setIsHome('home')
                        }>
                            <i class="fa-solid fa-house"></i>Home
                        </a>
                    </h3>
                </li>
                
            </ul>
            <hr class="solid"></hr>
            <ul>
                {channels.map( channel => (
                    <li className="ChannelList">
                        <a href
                        style={{cursor:'pointer'}}
                        onClick={()=> {
                            setIsHome('channel')
                            setSelected(channel)
                        }}>
                            {channel.title}
                        </a>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}
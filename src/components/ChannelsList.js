import React from 'react';
import '../App.css';
export default function ChannelsList(props){
    console.log('ChannelsList')
    console.log(props)
    return (
        <><ul>
            {props.channels.map( channel => (
                <li className="ChannelList">
                    <a href
                    style={{cursor:'pointer'}}
                    onClick={()=> {
                        props.setIsHome('channel')
                        props.setSelected(channel)
                    }}>
                        {channel.title}
                    </a>
                    
                </li>
            ))}
        </ul></>
    )
}
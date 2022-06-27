import React from 'react';
import '../App.css'
import TitleSong from './TitleSong';
export default function RowTable({clip, index, setCurrentClip}){
    console.log('Clip')
    console.log(clip['urls']);
    let minutes = clip['duration'];
    let seconds = minutes%60;
    seconds = Math.trunc(seconds)
    minutes /= 60;
    minutes = Math.trunc(minutes)
    if(minutes < 10)minutes = '0'+ minutes
    if(seconds < 10)seconds = '0'+ seconds
    let uploadedAt = clip['uploaded_at'].substring(0, 10);
    return (
        <tr className="Row">
            <td className="Left">{index +1}</td>
            <td className="Left">
                <TitleSong 
                image={clip['urls']['image']} 
                title={clip['title']} 
                author={clip['user']['username']}
                clip={clip['urls']['high_mp3']}
                setCurrentClip={setCurrentClip}/>
            </td>
            <td>{ clip['channel']['title'] }</td>
            <td>{ uploadedAt }</td>
            <td className="Center">{ minutes }:{ seconds }</td>
        </tr>
    )
}

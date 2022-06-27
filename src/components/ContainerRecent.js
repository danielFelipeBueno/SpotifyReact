import React from 'react';
import '../App.css'
import { HorizontalCard } from './HorizontalCard';
import { useChannels } from '../hooks/useChannels';
export const ContainerRecent = ({setIsHome, setSelected}) => {
    const first = useChannels(0,3);
    const second = useChannels(10,13);
    return (
        <div className="ContainerRecent">
            <h2>Buenos días</h2>
            <div className="Cards">
                {first.channels.map( channel => (
                <HorizontalCard 
                channel={channel} 
                setIsHome={setIsHome} 
                setSelected={setSelected}
                />))}
            </div>
            <div className="Cards">
                {second.channels.map( channel => (
                <HorizontalCard 
                channel={channel} 
                setIsHome={setIsHome} 
                setSelected={setSelected}/>))}
            </div>
        </div>
    )
}
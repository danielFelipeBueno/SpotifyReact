import React from 'react';
import '../App.css'
import { HomePage } from '../modules/HomePage';
import ChannelPage from '../modules/ChannelPage';

export const Dynamic = ({isHome, setIsHome, setCurrentClip,setSelected,selected}) =>{

    return (
        <><div className="Dynamic">
            {isHome === 'home' ? 
            <HomePage 
            setIsHome={setIsHome}
            setSelected={setSelected} 
            isHome={isHome} /> : null}
            {isHome === 'channel' ? 
            <ChannelPage 
            setIsHome={setIsHome} 
            selected={selected} 
            setCurrentClip={setCurrentClip}/> : null}
        </div></>
    )
}
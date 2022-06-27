import React from 'react';
import '../App.css'
import NavigationBar from '../modules/NavigationBar';
import BannerChannel from './BannerChannel';
import ButtonChannel from './ButtonChannel';
import TablePlayList from './TablePlayList';

export default function ChannelPage({setIsHome, selected, setCurrentClip}){
    console.log('Channel Page')
    console.log(selected['id']);
    return (
        <div className="ChannelPage">
            <NavigationBar 
            setIsHome={setIsHome}/>
            <BannerChannel 
            channel ={selected}/>
            <ButtonChannel/>
            <TablePlayList 
            id={selected['id']}
            setCurrentClip={setCurrentClip}/>
        </div>
    )
}
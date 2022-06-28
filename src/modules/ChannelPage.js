import React from 'react';
import '../App.css'
import NavigationBar from './NavigationBar';
import BannerChannel from '../components/BannerChannel';
import ButtonChannel from '../components/ButtonChannel';
import TablePlayList from '../components/TablePlayList';

export default function ChannelPage({setIsHome, selected, setCurrentClip}){
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
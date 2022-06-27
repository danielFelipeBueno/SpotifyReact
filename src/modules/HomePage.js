import '../App.css';
import React from 'react';

import { ContainerRecent } from '../components/ContainerRecent';
import ContainerAlbums from '../components/ContainerAlbums';
import NavigationBar from './NavigationBar';

export const HomePage =({setIsHome, setSelected, isHome}) => {
    
    return (
        <div className="HomePage">
            <NavigationBar isHome={isHome}/>
            <ContainerRecent setIsHome={setIsHome} setSelected={setSelected}/>
            <ContainerAlbums initial={6} final={11} setIsHome={setIsHome} setSelected={setSelected} />
            <ContainerAlbums initial={11} final={16} setIsHome={setIsHome} setSelected={setSelected} />
            <ContainerAlbums initial={16} final={21} setIsHome={setIsHome} setSelected={setSelected} />
            <div className="Bottom"></div>
        </div>
    )
}
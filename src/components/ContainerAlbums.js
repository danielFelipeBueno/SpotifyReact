import React from 'react';
import '../App.css'
import {AlbumCard} from './AlbumCard'
import { useChannels } from '../hooks/useChannels';
export default function ContainerAlbums({initial, final,setIsHome, setSelected}){
    const { channels }= useChannels(initial, final);
    return(
        <div className="ContainerAlbums">
            <div>
                <div className="TitleAlbums">
                    <h3>Programas que podrian gustarte</h3>
                    <h5>VER TODO</h5>
                </div>
                <div className="AlbumsCards">
                    {
                        channels.map( channel => (
                            <AlbumCard channel={channel} setIsHome={setIsHome} setSelected={setSelected}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
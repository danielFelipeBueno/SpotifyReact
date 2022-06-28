import React from 'react';
import '../App.css'
import RowTable from './RowTable';
import { useAudioClips } from '../hooks/useAudioClips';
export default function TablePlayListe({id, setCurrentClip}){
    const { audioClips }= useAudioClips(id);
    return (
        <div className="TablePlayList">
            <table>
                <tr>
                    <th className="TableCount">#</th>
                    <th className="TableTitle">TITLE</th>
                    <th className="TableAlbum">ALBUM</th>
                    <th className="TableAggregate">ADDED</th>
                    <th className="TableDuration">DURATION</th>
                </tr>
                {
                    audioClips.map( (clip, index) => (
                        <RowTable 
                        clip={clip} 
                        index={index}
                        setCurrentClip={setCurrentClip}/>
                    ))
                }
            </table>
        </div>
    )
}
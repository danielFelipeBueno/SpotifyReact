import React from 'react';
import '../App.css'
import RowTable from './RowTable';
import { useAudioClips } from '../hooks/useAudioClips';
export default function TablePlayListe({id, setCurrentClip}){
    console.log('ID'+id);
    const { audioClips }= useAudioClips(id);
    return (
        <div className="TablePlayList">
            <table>
                <tr>
                    <th className="TableCount">#</th>
                    <th className="TableTitle">TÍTULO</th>
                    <th className="TableAlbum">ÁLBUM</th>
                    <th className="TableAggregate">AGREGADO EL</th>
                    <th className="TableDuration">DURACIÓN</th>
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
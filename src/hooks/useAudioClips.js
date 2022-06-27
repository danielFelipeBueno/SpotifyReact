import { useEffect,useState } from 'react';
import { channelsApi } from '../api/channels'

export const useAudioClips = (id) =>{
    const baseURL = 'https://api.audioboom.com/channels/'
    const endpoint = '/audio_clips'
    const [audioClips,setAudioClips] = useState([]);
    useEffect( () =>{
        getAudioClips();
    }, []);
    const getAudioClips = async () => {
        const urlFinal = baseURL + id + endpoint;
        console.log('FINALLLLLLL');
        console.log(urlFinal);
        const resp = await channelsApi.get(urlFinal);
        console.log(resp.data);
        setAudioClips(resp.data.body.audio_clips);
    }
    return {
        audioClips
    }
}
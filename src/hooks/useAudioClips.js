import { useEffect,useState } from 'react';
import { channelsApi } from '../api/channels'

export const useAudioClips = (id) =>{
    const baseURL = 'https://api.audioboom.com/channels/'
    const endpoint = '/audio_clips'
    //*state var with audioclips for id
    const [audioClips,setAudioClips] = useState([]);
    //* Effect on init, get to audioClips
    useEffect( () =>{
        getAudioClips();
    }, []);
    const getAudioClips = async () => {
        //*Create request with base url, ID and endpoint
        const urlFinal = baseURL + id + endpoint;
        const resp = await channelsApi.get(urlFinal);
        //* set vart state with array of audioClips
        setAudioClips(resp.data.body.audio_clips);
    }
    return {
        audioClips
    }
}
import { useEffect,useState } from 'react';
import { channelsApi } from '../api/channels'

export const useChannels = (init,skip) =>{
    const [channels,setChannels] = useState([]);
    useEffect( () =>{
        getChannels();
    }, []);

    const getChannels = async () => {
        const resp = await channelsApi.get('https://api.audioboom.com/channels/recommended');
        const skipChannels = resp.data.body.slice(init,skip);
        setChannels(skipChannels);
    }

    return {
        channels
    }
}
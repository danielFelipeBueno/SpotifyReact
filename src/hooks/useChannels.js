import { useEffect,useState } from 'react';
import { channelsApi } from '../api/channels'

export const useChannels = (init,skip) =>{
    //*Channels var state
    const [channels,setChannels] = useState([]);
    useEffect( () =>{
        getChannels();
    }, []);
    //* get to channels/recommended endpoint
    const getChannels = async () => {
        const resp = await channelsApi.get('https://api.audioboom.com/channels/recommended');
        //*slice array based on function call
        const skipChannels = resp.data.body.slice(init,skip);
        //*set value of var state
        setChannels(skipChannels);
    }
    return {
        channels
    }
}
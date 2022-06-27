import '../App.css';

export const AlbumCard =({channel, setIsHome, setSelected})=>{
    var urls = channel.urls;
    var logo = Object.values(urls);
    
    logo = logo[1].original
    return (
        <div className="AlbumCard">
            <a href
            style={{cursor:'pointer'}}
            onClick={()=>{
                setIsHome('channel')
                setSelected(channel)
            }}>
            <i class="fa-solid fa-circle-play"></i>
                <div>
                    <img src={ logo }
                    alt={channel.type}/>
                    <h3>{ channel.title }</h3>
                    <h4>{ channel.channel_style}</h4>
                </div>
            </a>
        </div>
    )
}
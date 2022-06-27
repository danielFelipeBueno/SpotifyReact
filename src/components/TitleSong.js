/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../App.css'
export default function TitleSong({image,title, author,clip,setCurrentClip}){
    const props = {
        mp3: clip,
        image: image,
        title: title,
        author: author,
        autoPlay: true,
    }
    return (
        <><div className='TitleSong'>
            <a href
            style={{cursor:'pointer'}}
            onClick={()=>{
                setCurrentClip(props)
                console.log('CLICK CLIP')
            }}>
                <div className='ImageSong'>
                    {image === undefined 
                    ? <i class="fa-solid fa-image"></i>
                    :<img src={image} alt='No image'/>}
                </div>
                <div className='InfoSong'>
                    <div>
                        <h3>{ title }</h3>
                    </div>
                    <div>
                        <h4>{author}</h4>
                    </div>
                </div>
            </a>
        </div></>
    )
}
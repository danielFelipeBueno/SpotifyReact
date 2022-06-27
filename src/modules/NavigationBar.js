import React from 'react';
import '../App.css'
export default function NavigationBar({setIsHome,isHome}){
    return (
        <div className="NavigationBar">
            <div >
                <a href
                style={{cursor:'pointer'}}
                onClick={()=>
                    setIsHome('home')
                }>
                    {isHome === 'home'
                    ?null:
                    <div className="Arrow">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>}
                </a>
                
            </div>
            <h2> Daniel Bueno</h2>
        </div>
    )
}
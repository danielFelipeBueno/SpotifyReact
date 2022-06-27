import React from 'react';
import '../App.css'
import Header from '../components/Header';
import ListScreens from '../components/ListScreens'
export const Menu = ({setIsHome,setSelected}) => {
    return (
        <div className="Menu">
            <Header/>
            <ListScreens 
            setIsHome={setIsHome}
            setSelected={setSelected}/>
        </div>
    )
}
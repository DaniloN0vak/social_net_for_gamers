import React from "react";
import "./Sidebar.css"; // Імпортуємо CSS файл
import PMIcon from "./icons/PMIcon";
import GroupIcon from "./icons/GroupIcon.jsx";

const Sidebar = () => (
    <div style={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        background: '#23272f'
    }}>
        {/* Лівий бар */}
        <aside className="sidebar"> 
            <button className='button-cmt'>
                <PMIcon/>
            </button>
            <button className='button-pm'>
                <img className='img-pm-button' src="https://ik.imagekit.io/ufzr7vwbk/image_2025-01-19_10-46-47.png?updatedAt=1748859487762" alt="icon"/>
            </button>
            <button className='button-pm'>
                <img className='img-pm-button' src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-13-39.jpg?updatedAt=1749032038149" alt="icon"/>
            </button>
            <button className='button-pm'>
                <img className='img-pm-button' src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-07-12.jpg?updatedAt=1749032038129" alt="icon"/>
            </button>
            <button className='button-pm'>
                <img className='img-pm-button' src="https://ik.imagekit.io/ufzr7vwbk/image_2025-01-19_10-46-47.png?updatedAt=1748859487762" alt="icon"/>
            </button>
            <button className='button-cmt'>
                <GroupIcon/>     
            </button>  
            <button className='button-group'>
                <img className='img-group' src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button>  
            <button className='button-group'>
                <img className='img-group' src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button> 
            <button className='button-group'>
                <img className='img-group' src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button> 
            <button className='button-group'>
                <img className='img-group' src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button> 
        </aside>
    </div>
            
);

export default Sidebar;
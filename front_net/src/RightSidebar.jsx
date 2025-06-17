import "./Sidebar.css";
import React from "react";
import ChatIcon from './icons/ChatIcon';
import ContactsIcon from './icons/ContactsIcon';
import SavedIcon from './icons/SavedIcon';
import StoreIcon from './icons/StoreIcon';
import NotificationIcon from './icons/NotificationIcon';

const RightSidebar = () => (
    <aside className='sidebar-right'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', alignItems: 'center' }}>
        <button className='button-cmt'>
            <img className='img-rgt-main' src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-05-09_14-02-52.jpg?updatedAt=1748938849868" alt="icon" />
        </button>
        <button className='button-cmt'>
            <img className='img-rgt-main' src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-09-27.jpg" alt="icon" />
        </button>
        <button className='button-cmt'>
            <ChatIcon />
        </button>
        <button className='button-cmt'>
            <ContactsIcon />
        </button>
        <button className='button-cmt'>
            <SavedIcon />
        </button>
        <button className='button-cmt'>
            <StoreIcon />
        </button>
        <button className='button-cmt'>
            <NotificationIcon />
        </button>
    </div>
            <button className='button-cmt'
                style={{ marginTop: 'auto', marginBottom: 8 }}
                onClick={() => alert('Help is on the way!')}
            >
                <p className='raleway-font' style={{ color: '#fff', fontSize: 36, margin: 0 }}>?</p>
            </button>
        </aside>
);

export default RightSidebar;
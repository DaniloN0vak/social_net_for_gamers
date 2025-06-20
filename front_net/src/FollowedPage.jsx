import React from 'react';
import ChatIcon from './icons/ChatIcon';
import ContactsIcon from './icons/ContactsIcon';
import SavedIcon from './icons/SavedIcon';
import StoreIcon from './icons/StoreIcon';
import NotificationIcon from './icons/NotificationIcon';
import PostCard from './PostCard';


const FollowedPage = () => (
    <div style={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        background: '#23272f'
    }}>
       
        {/* Основний контент */}
        <main style={{
            flex: 1,
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#fff'
        }}>
            <div style={{
                marginTop: 32,
                background: '#23272f',
                borderRadius: 16,
                padding: 32,
                minWidth: 400,
                textAlign: 'center'
            }}>
                <PostCard
                    username="Vladislave"
                    dateTime="2025-06-12 17:12"
                    text="Сьогодні пограв в чудову гру - Spore. Зацініть яку я ракету створив!"
                    tags={['spore', 'потужно']}
                    images={[
                        "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-16_19-48-49.jpg?updatedAt=1750092643949",
                    ]}
                    stats={{ likes: 13, comments: 3, views: 500, shares: 10, saves: 8 }} />

                    
            </div>
        </main>

    </div>
            
);

export default FollowedPage;
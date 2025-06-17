import React from 'react';
import PostCard from './PostCard';
import './index.css'; // Імпортуємо CSS файл для стилів


const MainContent = () => (
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
                    avatar = "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-09-27.jpg"
                    username="Nігадяй"
                    dateTime="1944-06-04 13:52"
                    text="Служив у військовому відомстві Імперського міністерства закордонних справ. 
                    У червні 1933 року вступив у НСДАП. 
                    Після Французької кампанії з серпня 1940 року очолював управління радіо і пропаганди в складі німецького посольства в Парижі,
                     в 1942 році отримав ранг посланника. Переконаний нацист.
                     З 26 липня 1943 року — імперський уповноважений в Італії; з 9 листопада 1943 року — посол при республіці Сало. "
                    tags={['рейх', 'канцлер', 'привіт']}
                    images={[
                        "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-09-27.jpg",
                    ]}
                    stats={{ likes: 1200, comments: 300, views: 5000, shares: 150, saves: 80 }} />

                    <PostCard
                    username="Папмпкін"
                    dateTime="2025-06-04 13:00"
                    text="Це мій перший пост на цій платформі!"
                    tags={['перший', 'пост', 'привіт']}
                    images={[
                        "https://ik.imagekit.io/ufzr7vwbk/photo_2024-12-01_01-37-32.jpg?updatedAt=1749032202674",
                        "https://ik.imagekit.io/ufzr7vwbk/photo_2025-05-09_14-02-52.jpg?updatedAt=1748938849868"
                    ]}
                    stats={{ likes: 1200, comments: 300, views: 5000, shares: 150, saves: 80 }} />
            </div>
        </main>
</div>
            
);

export default MainContent;
import React from 'react';
import ChatIcon from './icons/ChatIcon';
import ContactsIcon from './icons/ContactsIcon';
import SavedIcon from './icons/SavedIcon';
import StoreIcon from './icons/StoreIcon';
import NotificationIcon from './icons/NotificationIcon';
import PostCard from './PostCard';

// бокові панелі
const sidebarStyle = {
    width: 125,
    background: '#212124',
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    minHeight: 'calc(100vh - 64px)', // 64px — висота Header
};

const rightSidebarStyle = {
    ...sidebarStyle,
    borderRight: 'none',
    alignItems: 'center',
    gap: 12, // менший відступ між кнопками
    paddingTop: 24, // відступ зверху
};
// Стилі основних кнопок
const buttonStyle_cmt = {
    background: '#262629',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: 0, // прибираємо зайвий padding
    fontSize: 15,
    cursor: 'pointer',
    width: 52,
    height: 52,
    display: 'flex', // додаємо flex для центрування
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s'
};

const buttonStyle_pm = {
    background: '#262629',
    color: '#fff',
    border: 'none',
    borderRadius: 100,
    padding: 0,
    fontSize: 15,
    cursor: 'pointer',
    width: 45,
    height: 45,
    radius: 100,
    transition: 'background 0.2s'
};
const imgStyle_pmbutton = {
    width: 45,
    height: 45,
    objectFit: 'cover',
    borderRadius: '50%',
};

const buttonStyle_group = {
    background: '#262629',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: 0,
    fontSize: 15,
    cursor: 'pointer',
    width: 45,
    height: 45,
    radius: 100,
    transition: 'background 0.2s'
};

const imgStyle_main = {
    width: 31,
    height: 31,
    marginLeft: -10,
    objectFit: 'cover',
};

const imgStyle_rgt_main = {
    width: 52,
    height: 52,
    borderRadius: 8,
    marginLeft: -18,
    marginTop: -10,
    objectFit: 'cover',
};

const imgStyle_group = {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginLeft: -10,
    objectFit: 'cover',
};

const MainContent = () => (
    <div style={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        background: '#23272f'
    }}>
        {/* Лівий бар */}
        <aside style={sidebarStyle}> 
            <button style={buttonStyle_cmt}>
                <img style={imgStyle_main} src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="icon"/>
            </button>
            <button style={buttonStyle_pm}>
                <img style={imgStyle_pmbutton} src="https://ik.imagekit.io/ufzr7vwbk/image_2025-01-19_10-46-47.png?updatedAt=1748859487762" alt="icon"/>
            </button>
            <button style={buttonStyle_pm}>
                <img style={imgStyle_pmbutton} src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-13-39.jpg?updatedAt=1749032038149" alt="icon"/>
            </button>
            <button style={buttonStyle_pm}>
                <img style={imgStyle_pmbutton} src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-07-12.jpg?updatedAt=1749032038129" alt="icon"/>
            </button>
            <button style={buttonStyle_pm}>
                <img style={imgStyle_pmbutton} src="https://ik.imagekit.io/ufzr7vwbk/image_2025-01-19_10-46-47.png?updatedAt=1748859487762" alt="icon"/>
            </button>
            <button style={buttonStyle_cmt}>
                <img style={imgStyle_main} src="https://cdn-icons-png.flaticon.com/512/681/681494.png" alt="icon"/>     
            </button>  
            <button style={buttonStyle_group}>
                <img style={imgStyle_group} src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button>  
            <button style={buttonStyle_group}>
                <img style={imgStyle_group} src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button> 
            <button style={buttonStyle_group}>
                <img style={imgStyle_group} src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button> 
            <button style={buttonStyle_group}>
                <img style={imgStyle_group} src="https://ik.imagekit.io/ufzr7vwbk/fluidicon.png?updatedAt=1748944193951" alt="icon"/>
            </button> 
        </aside>
        {/* Вмішає в собі 10 кнопок: 2 основних, 8 приватних(приватні повідомлення, групи) */}

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
                        "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-09-27.jpg",
                        "https://ik.imagekit.io/ufzr7vwbk/photo_2025-05-09_14-02-52.jpg?updatedAt=1748938849868"
                    ]}
                    stats={{ likes: 1200, comments: 300, views: 5000, shares: 150, saves: 80 }} />
            </div>
        </main>

        {/* Правий бар */}
        <aside style={rightSidebarStyle}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', alignItems: 'center' }}>
        <button style={buttonStyle_cmt}>
            <img style={imgStyle_rgt_main} src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-05-09_14-02-52.jpg?updatedAt=1748938849868" alt="icon" />
        </button>
        <button style={buttonStyle_cmt}>
            <img style={imgStyle_rgt_main} src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-09-27.jpg" alt="icon" />
        </button>
        <button style={buttonStyle_cmt}>
            <ChatIcon />
        </button>
        <button style={buttonStyle_cmt}>
            <ContactsIcon />
        </button>
        <button style={buttonStyle_cmt}>
            <SavedIcon />
        </button>
        <button style={buttonStyle_cmt}>
            <StoreIcon />
        </button>
        <button style={buttonStyle_cmt}>
            <NotificationIcon />
        </button>
    </div>
            <button
                style={{ ...buttonStyle_cmt, marginTop: 'auto', marginBottom: 8 }}
                onClick={() => alert('Help is on the way!')}
            >
                <p className='raleway-font' style={{ color: '#fff', fontSize: 36, margin: 0 }}>?</p>
            </button>
        </aside>
    </div>
            
);

export default MainContent;
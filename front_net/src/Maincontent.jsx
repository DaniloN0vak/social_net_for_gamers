import React from 'react';
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
};
// Стилі основних кнопок
const buttonStyle_cmt = {
    background: '#262629',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '10px 18px',
    fontSize: 15,
    cursor: 'pointer',
    width: 52,
    height: 52,
    radius: 10,
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
            <h1 className='raleway-font'>WW!</h1>
            <p className='raleway-font'>Попстар, папмпкін, нігадяй</p>
            <div style={{
                marginTop: 32,
                background: '#23272f',
                borderRadius: 16,
                padding: 32,
                minWidth: 400,
                textAlign: 'center'
            }}>
                <h2 className='raleway-font'>Перший пост</h2>
                <p className='raleway-font'>1</p>
            </div>
        </main>

        {/* Правий бар */}
        <aside style={rightSidebarStyle}>
            <button style={buttonStyle_cmt}>
                <img style={imgStyle_rgt_main} src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-05-09_14-02-52.jpg?updatedAt=1748938849868" alt="icon" />
            </button>
            <button style={buttonStyle_cmt}>
                <img style={imgStyle_rgt_main} src="https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-04_13-09-27.jpg" alt="icon" />
            </button>
            <button style={buttonStyle_cmt}></button>
            <button style={buttonStyle_cmt}></button>
        </aside>
    </div>
);

export default MainContent;
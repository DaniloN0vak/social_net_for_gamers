import React from 'react';
import './index.css'; 

const navButtons = [
    { label: 'Головна', key: 'home' },
    { label: 'Відстежуванні', key: 'following' },
    { label: 'Сторінки', key: 'pages' },
    { label: 'Новини', key: 'news' },
    { label: 'Спільноти', key: 'communities' },
];

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '64px',
            background: '#23272f',
            position: 'relative',
            zIndex: 10,
        }}>
            {/* Placeholder for left sidebar */}
            <div style={{ width: 80 }} />

            <div style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                maxWidth: 900,
                justifyContent: 'center',
            }}>
                <nav style={{ display: 'flex', gap: 24 }}>
                    {navButtons.map(btn => (
                        <button
                            key={btn.key}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#fff',
                                fontSize: 16,
                                cursor: 'pointer',
                                padding: '8px 12px',
                                borderRadius: 6,
                                transition: 'background 0.2s',
                            }}
                            onMouseOver={e => e.currentTarget.style.color = '#5a7ad1'}
                            onMouseOut={e => e.currentTarget.style.color = '#fff'}
                        >
                            {btn.label}
                        </button>
                    ))}
                </nav>
                <div style={{ marginLeft: 32, position: 'relative', width: 220 }}>
                    <input
                        type="text"
                        placeholder="Пошук"
                        style={{
                            padding: '8px 36px 8px 12px', 
                            borderRadius: 24,
                            border: '1px solid #353a45',
                            font: 'italic 15px Arial, sans-serif',
                            background: '#262629',
                            color: '#fff',
                            fontSize: 15,
                            outline: 'none',
                            width: 200,
                        }}
                    />
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff435"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            position: 'absolute',
                            right: -5,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none'
                        }}
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>

            {/* Placeholder for right sidebar */}
            <div style={{ width: 80 }} />
        </header>
    );
};

export default Header;
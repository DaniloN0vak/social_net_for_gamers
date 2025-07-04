import React from 'react';
import CommunityCard from './CommunityCard';
import './index.css';

const communities = [
    {
        banner: "https://images.unsplash.com/photo-1557683316-973673baf926?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
        avatar: "https://ik.imagekit.io/ufzr7vwbk/e0f56def6af460fc74927a67f4ba0dc850938e81.png?updatedAt=1750516281967",
        title: "TeamUP",
        description: "Пошук команди. Кооп. Мультиплеєр. CS, Apex, LoL",
        membersCount: 18000,
    },
    {
        banner: "https://static.vecteezy.com/system/resources/thumbnails/003/031/750/small_2x/dark-blue-wide-background-with-radial-blurred-gradient-vector.jpg",
        avatar: "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-16_19-48-49.jpg?updatedAt=1750092643949",
        title: "Spore, будуємо свою галактику!",
        description: "Бесіди онлі про Spore. Новичок? Профі? Тут ти знайдеш однодумців!",
        membersCount: 200,
    },
    {
        banner: "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63763.jpg",
        avatar: "https://ik.imagekit.io/ufzr7vwbk/c009a75c2a3f9e3eaabb87d615a389ba63947a48.png?updatedAt=1750516281718",
        title: "Dark souls team",
        description: "Любим тільки хардкор.",
        membersCount: 793,
    },
];
export default function CommunityPage() {
    return (
        <div style={{
            display: 'flex',
            minHeight: 'calc(100vh - 64px)',
            background: '#23272f'
        }}>
            <main style={{
                flex: 1,
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#fff'
            }}>
                <h1 className="raleway-font text-2xl font-bold mb-6">Спільноти</h1>
                <div className="w-full max-w-md">
                    {communities.map((community, index) => (
                        <CommunityCard
                            key={index}
                            banner={community.banner}
                            avatar={community.avatar}
                            title={community.title}
                            description={community.description}
                            membersCount={community.membersCount}
                            onJoin={() => alert(`Приєднано до ${community.title}`)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
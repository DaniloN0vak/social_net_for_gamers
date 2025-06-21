import React from 'react';
import CommunityCard from './CommunityCard';
import './index.css';

const communities = [
    {
        banner: "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-16_19-48-49.jpg?updatedAt=1750092643949",
        avatar: "https://ik.imagekit.io/ufzr7vwbk/e0f56def6af460fc74927a67f4ba0dc850938e81.png?updatedAt=1750516281967",
        title: "TeamUP",
        description: "Пошук команди. Кооп. Мультиплеєр. CS, Apex, LoL",
        membersCount: 18000,
    },
    {
        banner: "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-16_19-48-49.jpg?updatedAt=1750092643949",
        avatar: "https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-16_19-48-49.jpg?updatedAt=1750092643949",
        title: "Спільнота гравців Minecraft",
        description: "Все про Minecraft - від будівництва до виживання.",
        membersCount: 200,
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
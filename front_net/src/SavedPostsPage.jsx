import React from "react";
import { useSavedPosts } from "./contexts/SavedPostsContext.jsx";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    username: "Pumpkin",
    dateTime: "2025-06-04 13:00",
    text: "Це мій перший пост на цій платформі! Зацініть які маю досягнення, в майнкрафті",
    tags: ['перший', 'пост', 'привіт'],
    images: ["https://ik.imagekit.io/ufzr7vwbk/photo_1_2025-07-04_01-58-00.jpg?updatedAt=1751583526752", "https://ik.imagekit.io/ufzr7vwbk/photo_2_2025-07-04_01-58-00.jpg?updatedAt=1751583526834"],
    videos: [],
    stats: { likes: 10, comments: 0, views: 50, shares: 1, saves: 4 }
  },
  {
    id: 2,
    username: "n0vak",
    dateTime: "2025-07-01 11:10",
    text: "Встиг якось між навчанням купити собі консольку, пограв місяць і ось результати які ігри маю. А ви як розважаєтесь? )",
    tags: ['ps5', 'games'],
    images: ["https://ik.imagekit.io/ufzr7vwbk/For%20social%20net/photo_2_2025-07-04_02-20-14.jpg?updatedAt=1751584833753",
                        "https://ik.imagekit.io/ufzr7vwbk/For%20social%20net/photo_4_2025-07-04_02-20-14.jpg?updatedAt=1751584833764",
                        "https://ik.imagekit.io/ufzr7vwbk/For%20social%20net/photo_1_2025-07-04_02-20-14.jpg?updatedAt=1751584833801",
                        "https://ik.imagekit.io/ufzr7vwbk/For%20social%20net/photo_3_2025-07-04_02-20-14.jpg?updatedAt=1751584833828"
    ],
    videos: [],
    stats: { likes: 159, comments: 0, views: 500, shares: 293, saves: 88 },
    avatar: "https://i.scdn.co/image/ab67616d0000b2737f158d901d17cece6bef2211"
  },
  
];


const SavedPostsPage = () => {
    const savedIds = [1, 2];
    const savedPosts = posts.filter(post => savedIds.includes(post.id));

  return (
    <div style={{ display: "flex"}}>
      <LeftSidebar />
      <main style={{ flex: 1, padding: 32, background: "#1c1e22", minHeight: "100vh", color: "#fff" }}>
        <h2 className="raleway-font text-white text-center text-2xl mb-6">Збережені пости</h2>
        {savedPosts.length === 0 ? (
          <div className="text-white text-center">Немає збережених постів...</div>
        ) : (
          savedPosts.map(post => <PostCard key={post.id} {...post} />)
        )}
      </main>
      <RightSidebar />
    </div>
  );
};

export default SavedPostsPage;
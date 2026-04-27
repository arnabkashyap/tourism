"use client";

import { useState } from "react";
import { Heart, MessageCircle, Repeat2, Send, Share2, MapPin, User, Calendar } from "lucide-react";

// Mock Heritage Sites Data (usually from data-stores)
const HERITAGE_SITES = [
  { name: "Machu Picchu", location: "Peru" },
  { name: "Taj Mahal", location: "India" },
  { name: "Colosseum", location: "Italy" },
  { name: "Great Wall of China", location: "China" },
];

type Post = {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  entities: {
    places: string[];
    people: string[];
    dates: string[];
  };
};

const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    author: "archaeo_explorer",
    content: "Just read about the incredible irrigation systems in Machu Picchu. The Inca engineers were way ahead of their time!",
    timestamp: "2h",
    likes: 124,
    entities: {
      places: ["Machu Picchu"],
      people: ["Inca engineers"],
      dates: []
    }
  },
  {
    id: "2",
    author: "heritage_daily",
    content: "On this day in 1632, construction began on the Taj Mahal in Agra. It remains one of the most beautiful mausoleums in the world.",
    timestamp: "5h",
    likes: 856,
    entities: {
      places: ["Taj Mahal", "Agra"],
      people: [],
      dates: ["1632"]
    }
  }
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [newPost, setNewPost] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    setIsPosting(true);
    
    // Simulate NER Logic
    const extractedPlaces = HERITAGE_SITES
      .filter(site => newPost.toLowerCase().includes(site.name.toLowerCase()))
      .map(site => site.name);
    
    const post: Post = {
      id: Date.now().toString(),
      author: "you",
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      entities: {
        places: extractedPlaces,
        people: [], // Mocking for now
        dates: [] // Mocking for now
      }
    };

    setTimeout(() => {
      setPosts(prev => [post, ...prev]);
      setNewPost("");
      setIsPosting(false);
    }, 800);
  };

  return (
    <div className="animate-fade-in">
      <h1>Heritage Threads</h1>

      {/* Post Creator */}
      <div className="post-input-container">
        <textarea
          className="post-input"
          placeholder="What's the heritage story today?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "10px", color: "var(--muted)" }}>
            <MapPin size={18} />
            <User size={18} />
            <Calendar size={18} />
          </div>
          <button 
            className="post-button" 
            onClick={handlePost}
            disabled={isPosting || !newPost.trim()}
          >
            {isPosting ? "Tagging..." : "Post"}
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "50%", 
                background: "var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <User size={20} color="var(--muted)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>@{post.author}</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{post.timestamp}</span>
                </div>
                <p style={{ margin: "4px 0 12px 0", lineHeight: "1.5" }}>{post.content}</p>
                
                {/* Entities / Tags */}
                <div className="tag-container">
                  {post.entities.places.map(place => (
                    <span key={place} className="tag tag-place">{place}</span>
                  ))}
                  {post.entities.people.map(person => (
                    <span key={person} className="tag tag-person">{person}</span>
                  ))}
                  {post.entities.dates.map(date => (
                    <span key={date} className="tag tag-date">{date}</span>
                  ))}
                </div>

                {/* Interactions */}
                <div style={{ display: "flex", gap: "20px", marginTop: "16px", color: "var(--muted)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                    <Heart size={18} />
                    <span style={{ fontSize: "0.8rem" }}>{post.likes}</span>
                  </div>
                  <MessageCircle size={18} style={{ cursor: "pointer" }} />
                  <Repeat2 size={18} style={{ cursor: "pointer" }} />
                  <Share2 size={18} style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ height: "80px" }} /> {/* Spacer for nav bar */}
    </div>
  );
}

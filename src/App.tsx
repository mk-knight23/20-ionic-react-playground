import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Plus, Heart, MessageCircle, User, MoreHorizontal, Send, Bookmark, Share2, Smile, Camera, MapPin, AtSign, Image, Video } from 'lucide-react';

const STORIES = [
    { id: 1, name: 'You', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces', hasStory: false },
    { id: 2, name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', hasStory: true },
    { id: 3, name: 'Mike', avatar: 'https://imagesphoto-1507003211169-0a1dd7228f2d?w=.unsplash.com/100&h=100&fit=crop&crop=faces', hasStory: true },
    { id: 4, name: 'Emma', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces', hasStory: true },
    { id: 5, name: 'James', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces', hasStory: true },
    { id: 6, name: 'Olivia', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces', hasStory: true },
];

const POSTS = [
    {
        id: 1,
        user: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', handle: '@sarahc' },
        image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop',
        caption: 'Exploring the beautiful coastline this weekend! 🏖️ The weather was absolutely perfect. Can\'t wait to go back!',
        likes: 234,
        comments: 18,
        time: '2h',
        liked: false,
        bookmarked: false,
    },
    {
        id: 2,
        user: { name: 'Mike Johnson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', handle: '@mikej' },
        image: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=800&h=800&fit=crop',
        caption: 'New setup is finally complete! 🚀 Every developer\'s dream workspace.',
        likes: 892,
        comments: 45,
        time: '5h',
        liked: true,
        bookmarked: true,
    },
    {
        id: 3,
        user: { name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces', handle: '@emmaw' },
        image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800&h=800&fit=crop',
        caption: 'Sunrise hikes are the best way to start a morning. Who else is an early bird? 🌅',
        likes: 567,
        comments: 32,
        time: '8h',
        liked: false,
        bookmarked: false,
    },
];

const SUGGESTED_USERS = [
    { name: 'Alex Rivera', handle: '@alexr', reason: 'Followed by Sarah' },
    { name: 'Lisa Park', handle: '@lisap', reason: 'New to explore' },
    { name: 'David Kim', handle: '@davidk', reason: 'Popular in your area' },
];

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
    const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<number, boolean>>({});

    const toggleLike = (postId: number) => {
        setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    const toggleBookmark = (postId: number) => {
        setBookmarkedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    return (
        <div className="app-container">
            {/* Status Bar Spacer */}
            <div className="h-12 bg-white" />

            {/* Header */}
            <header className="app-header">
                <div className="px-4 py-3 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-[#1c1c1e]">SocialApp</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-[#f2f2f7] rounded-full transition-colors">
                            <Heart className="w-6 h-6 text-[#ff3b30]" />
                        </button>
                        <button className="p-2 hover:bg-[#f2f2f7] rounded-full transition-colors relative">
                            <MessageCircle className="w-6 h-6 text-[#1c1c1e]" />
                            <span className="absolute top-1 right-0 w-2 h-2 bg-[#ff3b30] rounded-full" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pb-24">
                {/* Search Bar */}
                <div className="px-4 py-3">
                    <div className="app-search-bar">
                        <Search className="w-5 h-5 text-[#8e8e93]" />
                        <span className="text-[#8e8e93] text-base">Search</span>
                    </div>
                </div>

                {/* Stories */}
                <div className="flex items-center gap-4 px-4 py-3 overflow-x-auto scrollbar-hide">
                    {STORIES.map((story) => (
                        <div key={story.id} className="flex flex-col items-center gap-1 min-w-fit">
                            <div className={`${story.hasStory ? 'app-story-ring' : ''}`}>
                                <div className={`${story.hasStory ? 'app-story-inner' : ''}`}>
                                    <img
                                        src={story.avatar}
                                        alt={story.name}
                                        className={`${story.hasStory ? 'w-16 h-16' : 'w-14 h-14'} rounded-full object-cover`}
                                    />
                                </div>
                            </div>
                            <span className="text-xs text-[#8e8e93] truncate w-16 text-center">{story.name}</span>
                        </div>
                    ))}
                </div>

                {/* Feed */}
                <div className="px-4">
                    {POSTS.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="app-feed-item"
                        >
                            {/* Post Header */}
                            <div className="app-feed-header">
                                <div className="flex items-center gap-3">
                                    <img src={post.user.avatar} alt={post.user.name} className="app-feed-avatar" />
                                    <div>
                                        <p className="text-sm font-semibold text-[#1c1c1e]">{post.user.name}</p>
                                        <p className="text-xs text-[#8e8e93]">{post.time}</p>
                                    </div>
                                </div>
                                <button className="p-2 hover:bg-[#f2f2f7] rounded-full transition-colors">
                                    <MoreHorizontal className="w-5 h-5 text-[#8e8e93]" />
                                </button>
                            </div>

                            {/* Post Image */}
                            <img src={post.image} alt="Post content" className="app-feed-image" onDoubleClick={() => toggleLike(post.id)} />

                            {/* Post Actions */}
                            <div className="app-feed-actions">
                                <button
                                    onClick={() => toggleLike(post.id)}
                                    className={`app-action-button ${likedPosts[post.id] ? 'text-[#ff3b30]' : ''}`}
                                >
                                    <Heart className={`w-6 h-6 ${likedPosts[post.id] ? 'fill-current' : ''}`} />
                                </button>
                                <button className="app-action-button">
                                    <MessageCircle className="w-6 h-6" />
                                </button>
                                <button className="app-action-button">
                                    <Send className="w-6 h-6" />
                                </button>
                                <div className="flex-1" />
                                <button
                                    onClick={() => toggleBookmark(post.id)}
                                    className={`app-action-button ${bookmarkedPosts[post.id] ? 'text-[#007aff]' : ''}`}
                                >
                                    <Bookmark className={`w-6 h-6 ${bookmarkedPosts[post.id] ? 'fill-current' : ''}`} />
                                </button>
                            </div>

                            {/* Likes Count */}
                            <div className="px-4 pb-2">
                                <p className="text-sm font-semibold text-[#1c1c1e]">{likedPosts[post.id] ? post.likes + 1 : post.likes} likes</p>
                            </div>

                            {/* Caption */}
                            <div className="app-feed-content">
                                <p className="text-sm">
                                    <span className="font-semibold text-[#1c1c1e]">{post.user.name}</span>
                                    <span className="text-[#1c1c1e] ml-2">{post.caption}</span>
                                </p>
                                <button className="text-[#8e8e93] text-sm mt-1">View all {post.comments} comments</button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Suggested Users */}
                <div className="px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#1c1c1e]">Suggested for You</h2>
                        <button className="text-sm text-[#007aff] font-semibold">See All</button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto">
                        {SUGGESTED_USERS.map((user) => (
                            <div key={user.name} className="flex flex-col items-center gap-2 min-w-fit">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                                    alt={user.name}
                                    className="w-20 h-20 rounded-full bg-[#f2f2f7]"
                                />
                                <p className="text-sm font-semibold text-[#1c1c1e]">{user.name}</p>
                                <p className="text-xs text-[#8e8e93]">{user.reason}</p>
                                <button className="app-button-primary text-xs px-4 py-2">Follow</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="app-nav-bar">
                <div className="flex items-center justify-around h-16">
                    <button
                        onClick={() => setActiveTab('home')}
                        className={`app-nav-item ${activeTab === 'home' ? 'app-nav-item-active' : ''}`}
                    >
                        <Home className="w-6 h-6" />
                        <span>Home</span>
                    </button>
                    <button className="app-nav-item">
                        <Search className="w-6 h-6" />
                        <span>Discover</span>
                    </button>
                    <button className="app-nav-item">
                        <Plus className="w-6 h-6" />
                        <span>Post</span>
                    </button>
                    <button className="app-nav-item">
                        <Heart className="w-6 h-6" />
                        <span>Activity</span>
                    </button>
                    <button className="app-nav-item">
                        <User className="w-6 h-6" />
                        <span>Profile</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, ChevronDown } from 'lucide-react';

const CommentSection = ({ videoId }) => {
  const [commentText, setCommentText] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [sortBy, setSortBy] = useState('top');

  const comments = [
    {
      id: 1,
      user: "Charlotte White",
      userHandle: "@charlottewhite",
      date: "1 month ago",
      text: "This is absolutely incredible! The production quality is amazing and the content is so informative. Thank you for sharing this! 🎉",
      likes: 1245,
      replies: 12,
      avatar: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      user: "John Doe",
      userHandle: "@johndoe",
      date: "2 weeks ago",
      text: "This helped me understand the concept so much better. Your explanations are always so clear and easy to follow. Keep up the great work!",
      likes: 892,
      replies: 8,
      avatar: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      user: "Alex Thompson",
      userHandle: "@alexthompson",
      date: "5 days ago",
      text: "Just what I needed! Been looking for a tutorial like this for weeks. Subscribed immediately! 🔥",
      likes: 456,
      replies: 5,
      avatar: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      user: "Maria Garcia",
      userHandle: "@mariagarcia",
      date: "3 days ago",
      text: "The editing in this video is top-notch. Really professional work. Can't wait for the next one!",
      likes: 234,
      replies: 3,
      avatar: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <div className="mt-6">
      {/* Comments Header */}
      <div className="flex items-center gap-8 mb-6">
        <h3 className="text-xl font-semibold text-white">
          {comments.length} Comments
        </h3>
        
        {/* Sort Button */}
        <button className="flex items-center gap-2 text-white hover:bg-[#272727] px-3 py-1 rounded-lg transition-colors">
          <ChevronDown className="w-5 h-5" />
          <span className="text-sm font-medium">
            {sortBy === 'top' ? 'Top comments' : 'Newest first'}
          </span>
        </button>
      </div>

      {/* Add Comment */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm">
          U
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onFocus={() => setShowButtons(true)}
            className="w-full bg-transparent border-b border-[#3f3f3f] text-white text-sm outline-none focus:border-white transition-colors pb-2 placeholder-[#717171]"
          />
          {showButtons && (
            <div className="flex items-center justify-end gap-2 mt-4">
              <button
                onClick={() => {
                  setShowButtons(false);
                  setCommentText("");
                }}
                className="px-4 py-2 text-sm font-medium text-white hover:bg-[#272727] rounded-full transition-colors"
              >
                Cancel
              </button>
              <button
                disabled={!commentText.trim()}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-[#272727] disabled:text-[#717171] transition-colors"
              >
                Comment
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-4 py-2">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${comment.avatar} flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-white">
                  {comment.userHandle}
                </span>
                <span className="text-xs text-[#aaa]">{comment.date}</span>
              </div>
              <p className="text-sm text-white mb-2 leading-relaxed">{comment.text}</p>
              
              <div className="flex items-center gap-1">
                <button className="flex items-center gap-2 text-white hover:bg-[#272727] px-3 py-1.5 rounded-full transition-colors group">
                  <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">{comment.likes}</span>
                </button>
                <button className="text-white hover:bg-[#272727] p-1.5 rounded-full transition-colors">
                  <ThumbsDown className="w-4 h-4 hover:scale-110 transition-transform" />
                </button>
                <button className="text-xs font-semibold text-white hover:bg-[#272727] px-3 py-1.5 rounded-full transition-colors ml-2">
                  Reply
                </button>
              </div>

              {/* Show Replies Button */}
              {comment.replies > 0 && (
                <button className="flex items-center gap-2 mt-2 text-blue-500 hover:bg-[#263850] px-4 py-2 rounded-full transition-colors">
                  <ChevronDown className="w-4 h-4" />
                  <span className="text-sm font-semibold">{comment.replies} replies</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
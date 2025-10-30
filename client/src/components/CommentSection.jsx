import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

export default function CommentSection() {
  const [commentText, setCommentText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  const comments = [
    {
      user: "Charlotte White",
      date: "1 month ago",
      text: "A very slow, gentle, beautiful shamanic tantra love music. Perfect for meditation or deep relaxation.",
      likes: 9,
      replies: 1,
      avatar: "https://picsum.photos/40/40?random=1"
    },
    {
      user: "John Doe",
      date: "2 weeks ago",
      text: "This helped me focus while studying. Thanks for uploading!",
      likes: 3,
      replies: 0,
      avatar: "https://picsum.photos/40/40?random=2"
    },
  ];

  return (
    <div className="mt-6">
      {/* Comment Count */}
      <h3 className="text-xl font-semibold text-white mb-6">
        {comments.length} Comments
      </h3>

      {/* Add Comment */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex-shrink-0"></div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onFocus={() => setShowButtons(true)}
            className="w-full bg-transparent border-b border-[#3f3f3f] text-white text-sm outline-none focus:border-white transition-colors pb-1"
          />
          {showButtons && (
            <div className="flex items-center justify-end gap-2 mt-3">
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
                className="px-4 py-2 text-sm font-medium bg-[#3ea6ff] text-black rounded-full hover:bg-[#65b8ff] disabled:bg-[#272727] disabled:text-[#717171] transition-colors"
              >
                Comment
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start gap-4">
            <div 
              className="w-10 h-10 rounded-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${comment.avatar})` }}
            ></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-white">
                  @{comment.user.toLowerCase().replace(' ', '')}
                </span>
                <span className="text-xs text-[#aaaaaa]">{comment.date}</span>
              </div>
              <p className="text-sm text-white mb-2">{comment.text}</p>
              
              {/* Comment Actions */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[#f1f1f1] hover:text-white transition-colors group">
                  <ThumbsUp size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs">{comment.likes}</span>
                </button>
                <button className="text-[#f1f1f1] hover:text-white transition-colors group">
                  <ThumbsDown size={16} className="group-hover:scale-110 transition-transform" />
                </button>
                <button className="text-xs font-medium text-[#f1f1f1] hover:text-white hover:bg-[#272727] px-3 py-1.5 rounded-full transition-colors">
                  Reply
                </button>
              </div>

              {/* Show Replies */}
              {comment.replies > 0 && (
                <button className="flex items-center gap-2 text-sm font-medium text-[#3ea6ff] hover:bg-[#263850] px-3 py-1.5 rounded-full mt-3 transition-colors">
                  <span>▼</span>
                  {comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
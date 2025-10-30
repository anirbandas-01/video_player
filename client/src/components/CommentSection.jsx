const CommentSection = () => {
  const [commentText, setCommentText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  const comments = [
    {
      user: "Charlotte White",
      date: "1 month ago",
      text: "A very slow, gentle, beautiful video. Perfect for relaxation.",
      likes: 9,
      avatar: "from-pink-500 to-rose-500"
    },
    {
      user: "John Doe",
      date: "2 weeks ago",
      text: "This helped me focus while studying. Thanks for uploading!",
      likes: 3,
      avatar: "from-blue-500 to-cyan-500"
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-6">
        {comments.length} Comments
      </h3>

      <div className="flex items-start gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0" />
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onFocus={() => setShowButtons(true)}
            className="w-full bg-transparent border-b border-[#3f3f3f] text-white text-sm outline-none focus:border-white transition-colors pb-2"
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
                className="px-4 py-2 text-sm font-medium bg-[#3ea6ff] text-black rounded-full hover:bg-[#65b8ff] disabled:bg-[#272727] disabled:text-[#717171] transition-colors"
              >
                Comment
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${comment.avatar} flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-white">
                  @{comment.user.toLowerCase().replace(' ', '')}
                </span>
                <span className="text-xs text-[#aaa]">{comment.date}</span>
              </div>
              <p className="text-sm text-white mb-3 leading-relaxed">{comment.text}</p>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-xs font-medium">{comment.likes}</span>
                </button>
                <button className="text-white hover:text-white/80 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
                <button className="text-xs font-medium text-white hover:bg-[#272727] px-3 py-1.5 rounded-full transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
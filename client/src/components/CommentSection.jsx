// src/components/CommentSection.jsx
export default function CommentSection() {
  const comments = [
    {
      user: "Charlotte White",
      date: "1 month ago",
      text: "A very slow, gentle, beautiful shamanic tantra love music. Perfect for meditation or deep relaxation.",
      likes: 9,
      replies: 1,
    },
    {
      user: "John Doe",
      date: "2 weeks ago",
      text: "This helped me focus while studying. Thanks for uploading!",
      likes: 3,
      replies: 0,
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>

      {/* Add new comment box */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 bg-transparent border-b border-gray-700 text-sm outline-none focus:border-accent p-1"
        />
      </div>

      {/* Existing comments */}
      {comments.map((comment, index) => (
        <div key={index} className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-white">{comment.user}</span>
              <span className="text-textSecondary">{comment.date}</span>
            </div>
            <p className="text-sm text-textSecondary mt-1">{comment.text}</p>

            <div className="flex items-center gap-4 mt-2 text-xs text-textSecondary">
              <span>👍 {comment.likes}</span>
              <span>💬 {comment.replies} replies</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
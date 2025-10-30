const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'trending', icon: Compass, label: 'Trending' },
    { id: 'subscriptions', icon: PlaySquare, label: 'Subscriptions' },
  ];

  const libraryItems = [
    { id: 'library', icon: Folder, label: 'Library' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'liked', icon: ThumbsUp, label: 'Liked Videos' },
  ];

  return (
    <aside className={`fixed left-0 top-14 bottom-0 bg-[#0f0f0f] border-r border-[#272727] transition-all duration-300 overflow-y-auto z-40 ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className="py-3">
        {/* Main Menu */}
        <div className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                activeItem === item.id
                  ? 'bg-[#272727] text-white'
                  : 'text-[#aaa] hover:bg-[#272727] hover:text-white'
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#272727] my-3 mx-3" />

        {/* Library */}
        <div className="space-y-1 px-3">
          {isOpen && <p className="px-3 py-2 text-sm font-semibold text-white">Library</p>}
          {libraryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                activeItem === item.id
                  ? 'bg-[#272727] text-white'
                  : 'text-[#aaa] hover:bg-[#272727] hover:text-white'
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Subscriptions */}
        {isOpen && (
          <>
            <div className="h-px bg-[#272727] my-3 mx-3" />
            <div className="px-3">
              <p className="px-3 py-2 text-sm font-semibold text-white">Subscriptions</p>
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#272727] transition-colors"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${
                    i === 1 ? 'from-red-500 to-orange-500' :
                    i === 2 ? 'from-blue-500 to-cyan-500' :
                    i === 3 ? 'from-purple-500 to-pink-500' :
                    'from-green-500 to-emerald-500'
                  }`} />
                  <span className="text-sm text-[#aaa]">Channel {i}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

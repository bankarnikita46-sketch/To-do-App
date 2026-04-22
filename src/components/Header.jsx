// Header component - shows app title and live stats
const Header = ({ total, remaining }) => {
  return (
    <header className="w-full max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur rounded-full text-xs font-semibold text-violet-700 shadow-sm border border-violet-100 mb-4">
        ✨ Productivity, simplified
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent leading-tight">
        My To-Do List
      </h1>
      <p className="mt-3 text-gray-600">
        {total === 0
          ? 'Start by adding your first task below'
          : `You have ${remaining} task${remaining === 1 ? '' : 's'} pending`}
      </p>
    </header>
  );
};

export default Header;

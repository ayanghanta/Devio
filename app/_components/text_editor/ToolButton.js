const ToolButton = ({ onClick, isActive, children }) => {
  return (
    <button
      onClick={onClick}
      className={`p-0.5 sm:p-1 rounded-md transition duration-200 ${
        isActive
          ? "bg-slate-300 text-slate-900"
          : "text-slate-700 hover:text-slate-900 hover:bg-slate-300"
      }`}
    >
      {children}
    </button>
  );
};

export default ToolButton;

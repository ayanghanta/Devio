"use client";

function Button({
  children,
  type,
  onClick,
  role = "button",
  disabled = false,
}) {
  const base =
    "rounded-md px-2 py-1 text-sm sm:px-4 sm:py-2 text-lg disabled:cursor-not-allowed  flex gap-2";
  const editbase =
    "text-sm text-white sm:text-base transition duration-300 px-1.5 py-1 rounded-sm disabled:cursor-not-allowed flex gap-2 items-center ";
  const style = {
    create:
      "bg-slate-700 text-sm font-semibold text-gray-100 sm:text-base rounded-sm shadow-sm px-2 py-1 text-sm sm:px-4 sm:py-2 hover:bg-slate-800 transition flex items-center gap-2",
    primary:
      base +
      "bg-gray-800 text-sm text-gray-100 sm:text-base hover:bg-gray-700 transition duration-300",
    secondary:
      base +
      "bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-300",
    block:
      "bg-gray-100 px-2 py-1 rounded-sm hover:bg-gray-200 transition duration-300",

    delete: editbase + " bg-red-500 hover:bg-red-700",
    edit: editbase + "bg-amber-500 hover:bg-amber-700",
    publish: editbase + "bg-green-500 hover:bg-green-700",
    hide: editbase + "bg-indigo-500 hover:bg-indigo-700",
    cancel: editbase + "bg-gray-300 hover:bg-gray-400",
  };

  if (onClick)
    return (
      <button
        className={style[type]}
        onClick={onClick}
        type={role}
        disabled={disabled}
      >
        {children}
      </button>
    );
  return (
    <button className={style[type]} type={role} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

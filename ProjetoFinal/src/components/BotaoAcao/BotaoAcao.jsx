import { Link } from "react-router-dom";

export default function BotaoAcao({ children, onClick, to }) {
  const baseClass =
    "px-40 py-4 mt-6 text-3xl font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 transition duration-200";

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}

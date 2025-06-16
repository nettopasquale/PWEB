import React from 'react'

export default function BotaoAcao({
    children,
    onClick,
    type = "button",
    className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-700 text-white text-xl font-bold px-8 py-4 rounded-lg shadow-md hover:bg-green-800 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  )
};
import React from 'react'

export default function InputModal({label, value, disabled = false}) {
  return (
  <div>
    <label className="block text-white font-bold mb-2">{label}</label>
    <input
      type="text"
      value={value}
      disabled={disabled}
      className="w-full px-3 py-2 border rounded-2xl bg-gray-100"
    />
  </div>
  )
}

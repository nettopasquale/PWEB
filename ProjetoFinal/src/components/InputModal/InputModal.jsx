import React from 'react'

export default function InputModal({label, value, disabled = false}) {
  return (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">{label}</label>
    <input
      type="text"
      value={value}
      disabled={disabled}
      className="w-full px-3 py-2 border rounded bg-gray-100"
    />
  </div>
  )
}

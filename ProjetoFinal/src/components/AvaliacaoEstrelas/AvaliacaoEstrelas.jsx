import { useState } from 'react'

export default function AvaliacaoEstrelas() {
    const [rating, setRating] = useState(0);
    
  return (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-3xl ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
            >
            ★
            </button>
        ))}
        <input type="hidden" name={name} value={rating} />
        </div>
  )
}

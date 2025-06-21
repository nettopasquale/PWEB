import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function AvaliacaoEstrelas({
  nota = 0,
  onChange,
  readOnly = false,
}) {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <button
            key={currentRating}
            type="button"
            onClick={() => !readOnly && onChange?.(currentRating)}
            onMouseEnter={() => !readOnly && setHover(currentRating)}
            onMouseLeave={() => !readOnly && setHover(null)}
            disabled={readOnly}
          >
            <FaStar
              size={28}
              className={
                (hover ?? nota) >= currentRating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          </button>
        );
      })}
    </div>
  );
}

import React from "react";
import { persons } from "../data/mapping";

export default function SelectPerson({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-white drop-shadow-[0_0_10px_#ff0000]">
        Wybierz, kim jesteś 🎅
      </h1>

      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        {persons.map((p) => (
          <button
            key={p}
            onClick={() => onSelect(p)}
            className="
              w-full py-4 rounded-2xl font-bold 
              text-2xl text-white
              bg-red-700 hover:bg-red-600
              shadow-[0_0_12px_rgba(255,50,50,0.7)]
              hover:shadow-[0_0_18px_rgba(255,80,80,0.9)]
              transition-all duration-200
              border border-red-900
            "
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

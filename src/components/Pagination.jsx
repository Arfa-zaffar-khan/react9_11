import React from "react";

export default function Pagination({ totalpages, page, setpage }) {
  return (
    <div className="flex items-center justify-center mb-4">
      <button
        className={`mx-1  text-sm font-semibold text-gray-900 ${
          page <= 1 ? "invisible" : "visible"
        }`}
        onClick={() => setpage(page - 1)}
      >
        &larr; Previous
      </button>
      
      {Array.from({ length: totalpages }).map((_, i) => {
        return (
          <button
            onClick={() => setpage(i + 1)}
            className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold ${
              i + 1 === page
                ? "text-white bg-black"
                : "text-gray-900 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        );
      })}

      <button
        className={`mx-2 text-sm font-semibold text-gray-900 ${
          page === totalpages ? "invisible" : "visible"
        }`}
        onClick={() => setpage(page + 1)}
      >
        Next &rarr;
      </button>
    </div>
  );
}

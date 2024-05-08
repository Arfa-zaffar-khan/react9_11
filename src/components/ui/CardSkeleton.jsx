import React from "react";

export default function CardSkeleton() {
  return (
    <div className="rounded-md border animate-pulse">
      <div className="aspect-[16/9] w-full rounded-md bg-gray-200"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 w-3/4 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 w-1/2 mb-3 rounded"></div>
        <div className="h-4 bg-gray-200 w-1/4 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 w-3/4 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 w-1/2 mb-2 rounded"></div>
        <div className="h-6 bg-gray-200 w-full rounded-sm mb-2"></div>
        <button
          type="button"
          className="w-full rounded-sm bg-gray-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          disabled
        >
          Loading...
        </button>
      </div>
    </div>
  );
}

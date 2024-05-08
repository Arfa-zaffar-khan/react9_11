import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="py-10">
    <div className="text-center">
      <p className="text-base font-semibold text-black">{error.status}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
        {error.message}
      </h1>
      <div className="mt-4 flex items-center justify-center gap-x-3">
        <Link 
          to="/"
          className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <ArrowLeft size={16} className="mr-2" />
          Go back
        </Link>
        <Link
          to="/contact"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Contact us
        </Link>
      </div>
    </div>
  </div>
  )
}

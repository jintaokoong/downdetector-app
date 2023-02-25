"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 my-4">
      <h1 className="text-gray-600 font-bold text-2xl">
        Something went wrong 😢
      </h1>
      <pre className="px-4 py-4 text-lg bg-gray-50 rounded-lg text-gray-600">
        {error.message}
      </pre>
      <button
        className="px-4 py-2 max-w-max  bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 hover:shadow-lg transition duration-300"
        onClick={reset}
      >
        Try again
      </button>
      <Link
        className="underline text-gray-600 hover:text-gray-800 text-sm"
        href="/"
      >
        Back to home
      </Link>
    </div>
  );
}

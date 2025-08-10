import Link from 'next/link'; // Make sure this import is at the top
import Image from 'next/image'; // This might already be there

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Existing content might look similar to this, adjust as needed */}
      <h1 className="text-5xl font-bold text-gray-800 mb-8">
        Welcome to Next.js with Pages Router!
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Explore different counter versions:
      </p>

      {/* Add this new link */}
      <Link href="/counter-app">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
          Go to Counter App (useState)
        </button>
      </Link>

      {/* You might have other links or content from the default Next.js setup */}

      {/* Example of default Next.js content (keep or remove as you like) */}
      <div className="mt-12 text-sm text-gray-500">
        <a
          href="https://nextjs.org/docs"
          className="text-blue-500 hover:underline mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          className="text-blue-500 hover:underline mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS Docs
        </a>
      </div>
    </div>
  );
}

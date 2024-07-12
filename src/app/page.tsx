import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="flex space-x-4 p-4">
      <Link href="/overview">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Overview
      </button>
      </Link>
      <Link href="/authentication">
      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
        Authentication
      </button>
      </Link>
    </div>
  );
};

export default Home;

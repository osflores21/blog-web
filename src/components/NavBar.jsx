import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white p-4 border-b border-gray-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/logo.jpg"
            alt="logo P4B"
            width={50}
            height={50}
            priority
            className="rounded-full"
          />
        </Link>
        <div className="text-center text-black">
          <h1 className="text-lg font-bold">Blog</h1>
        </div>
        <div className="flex space-x-4">
          <div className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red hover:bg-green-600">
            <Link href="/Create">New post</Link>
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red hover:bg-green-600">
            <Link href="/ManageEntries">Manage</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

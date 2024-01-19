import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-t from-smalt-100 to-smalt-50 p-4 border-b border-gray-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/p4b.avif"
            alt="logo P4B"
            width={100}
            height={50}
            priority
            className="rounded-full"
          />
        </Link>
        <div className="items-center">
          <h1 className="mb-2 text-balance font-bold leading-tight text-2xl text-black"> Blog</h1>
        </div>
        <div className="flex space-x-4">
          <div className="px-4 py-2 rounded border border-smalt-700 bg-white hover:bg-smalt-50 hover:border-smalt-700 hover:text-smalt-700 hover:shadow-md text-sm text-balance text-smalt-700 font-normal">
            <Link href="/Create">New post</Link>
          </div>
          <div className="px-4 py-2 rounded border border-smalt-700 bg-white hover:bg-smalt-50 hover:border-smalt-700 hover:text-smalt-700 hover:shadow-md text-sm text-balance text-smalt-700 font-normal">
            <Link href="/ManageEntries">Manage</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

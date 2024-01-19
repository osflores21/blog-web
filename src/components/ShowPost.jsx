"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { subStringText } from '@/app/lib/utils';
import useDataFetchingByFilter from '@/app/lib/hooks/useDataFetchingByFilter';

const ShowPost = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading } = useDataFetchingByFilter(searchTerm);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
    <div className='mb-4 mt-4 min-w-96'>
      <div className='mb-4 mt-4 flex justify-center items-center'>
        <input
          className="border border-smalt-400 px-4 py-2 lg:w-4/6 text-black rounded-md focus:outline-none focus:border-smalt-800"
          type="text"
          placeholder="Search by title, author or content"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {isLoading
        ? (
          <p className='text-black text-xl font-bold text-center'>Loading...</p>
        ) : (
          <div className='mb-4 mt-4 flex justify-center items-center min-w-96'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 w-4/6 min-w-min'>
              {data.length === 0 ? (
                <div className='col-start-2'>
                  <p className='text-black text-xl font-bold  text-center'>There are no publications</p>
                </div>
              ) : (
                data.map((item, index) => (
                  <div key={index} className=' bg-smalt-50 border border-smalt-400 rounded-3xl text-left h-max'>
                    <h5
                      className="border-b-2 border-smalt-400 px-3 py-3 text-xl font-medium leading-tight  text-black">
                      {item.title}
                    </h5>
                    <div className='p-3'>
                      <h6 className="mb-2 text-balance font-medium leading-tight  text-black">
                        {item.autor}
                      </h6>
                      <p className="mb-4 text-base  text-black">
                        {subStringText(item.content)}
                      </p>
                      <div className='flex mt-4 space-x-2 justify-end'>
                        <div className="px-4 py-2 rounded border border-smalt-700 bg-white hover:bg-smalt-50 hover:border-smalt-700 hover:text-smalt-700 hover:shadow-md text-sm text-balance text-smalt-700 font-normal">
                          <Link href={`/ShowDetail/${item.id}`}>
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        )}
    </div>
  );
};

export default ShowPost;

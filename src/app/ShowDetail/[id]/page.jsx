"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { sliceDate, btnBack } from '@/app/lib/utils';
import useDataFetching from '@/app/lib/hooks/useDataFetching';


const ShowDetail = ({ params }) => {
  const route = useRouter();
  const id = params.id
  const { data, loading } = useDataFetching(id);

  if (loading) {
    return <p className="text-center text-gray-500 mt-4">Loading...</p>;
  }
  return (
    <div className="flex flex-col bg-smalt-50 border border-smalt-400 p-4 rounded-md shadow-md max-w-lg mx-auto mt-8 min-w-[300px] min-h-[200px]">
      <p className="text-2xl font-bold text-gray-800 mb-2">{data.title}</p>
      <p className="text-gray-500">{sliceDate(data.dateCreate)}</p>
      <p className="text-gray-700">Por: {data.autor}</p>
      <p className="text-gray-700">{data.content}</p>
      <div className="mt-4 flex justify-end">

        <button
          type="button"
          className="px-4 py-2 rounded border border-smalt-700 bg-white hover:bg-smalt-50 hover:border-smalt-700 hover:text-smalt-700 hover:shadow-md text-sm text-balance text-smalt-700 font-normal"
          onClick={() => btnBack(route)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ShowDetail;

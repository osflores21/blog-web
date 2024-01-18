import React from 'react';
import Link from 'next/link';

const URI='https://blogapi-production-9469.up.railway.app/api/';

const getData = async () => {
  try {
    const response = await fetch(URI, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const subStringText = (text, cant = 70) => {
  let first70 = text.substring(0, cant);
  if (text.length > 70) {
    first70 += "...";
  }
  return first70
}

const ShowPost = async () => {
  const data = await getData();

  return (

    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4  w-full'>
      {data.map((item, index) => (
        <div key={index} className='bg-white border border-gray-300 p-4 rounded-md shadow-md'>
          <p className='text-gray-600 text-xl font-bold mb-2'>{item.title}</p>
          <p className='text-gray-600 mb-2'>{item.autor}</p>
          <p className='text-gray-700 break-words'>{subStringText(item.content)}</p>
          <div className='flex mt-4 space-x-2 justify-end'>
            <div className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600">
              <Link key={item.id} href={`/ShowDetail/${item.id}`}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;

import React from 'react';
import Link from 'next/link';
import BtnDelete from '@/components/BtnDelete';

const getData = async () => {
  try {
    const response = await fetch(process.env.URI, { cache: 'no-store' });
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

const StyledLink = ({ children, href }) => {
  return (
    <div className="text-blue-500 cursor-pointer hover:underline  flex justify-end pb-2">
      <Link href={href} passHref>
        {children}
      </Link>
    </div>
  );
};

const ManageEntries = async () => {
  const data = await getData();

  return (
    <div className='flex flex-col bg-white border border-gray-300 p-4 rounded-md shadow-md  mx-auto mt-8 '>
      <StyledLink href="/">Back</StyledLink>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Title
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Author
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Content
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap'>
                <p className='text-sm font-medium text-gray-900'>{item.title}</p>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <p className='text-sm text-gray-500'>{item.autor}</p>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <p className='text-sm text-gray-500'>{subStringText(item.content, 10)}</p>
              </td>
              <td className='px-6 py-2 whitespace-nowrap space-x-2'>
                <div className="flex">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red hover:bg-blue-600"  >
                    <Link key={item.id} href={`/Edit/${item.id}`}>
                      Edit
                    </Link>

                  </div>
                  <div className='px-2'>
                    <BtnDelete id={item.id} />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEntries;

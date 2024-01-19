import React from 'react';
import Link from 'next/link';
import BtnDelete from '@/components/BtnDelete';
import { subStringText } from '../lib/utils';
import StyledLink from '@/components/StyledLink';
import { getData } from '../lib/services';
const ManageEntries = async () => {
  const data = await getData();
  return (
    <div className='flex flex-col bg-smalt-50 border border-smalt-400 p-4 rounded-md shadow-md min-w-96 mx-auto mt-8 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5'>
      <StyledLink href="/" >Back</StyledLink>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-smalt-200'>
          <thead className='bg-smalt-50'>
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
          <tbody className='bg-smalt-50 divide-y divide-smalt-200'>
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
                    <div className="hover:bg-smalt-200 px-2 py-2 rounded-full flex items-center">
                      <Link key={item.id} href={`/Edit/${item.id}`}>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-white"
                        >
                          <path
                            d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10 3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7 17 4.414 15.414 6 18 8.586z"
                            fill="#0D0D0D"
                          />
                        </svg>
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
    </div>
  );
};

export default ManageEntries;

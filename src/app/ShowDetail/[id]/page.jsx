"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

const URI = "https://blogapi-production-9469.up.railway.app/api/";

const getEntrieById = async (id) => {
  try {
    const url = `${URI}/entrie/${id}`;
    const response = await fetch(url, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const sliceDate = (date) => {
  return date.slice(0, 10);
}

const btnBack = (route) => {
  route.push('/');
};

const ShowDetail = ({ params }) => {
  const route = useRouter();
  const id = params.id
  const [entrie, setEntrie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEntrieById(id);
        setEntrie(data[0]);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!entrie) {
    return (
      <p className="text-center text-gray-500 mt-4">
        Loading...
      </p>
    );
  }
  return (
    <div className="flex flex-col bg-white border border-gray-300 p-4 rounded-md shadow-md max-w-lg mx-auto mt-8 min-w-[300px] min-h-[300px]">
      <p className="text-2xl font-bold text-gray-800 mb-2">{entrie.title}</p>
      <p className="text-gray-500">{sliceDate(entrie.dateCreate)}</p>
      <p className="text-gray-700">Por: {entrie.autor}</p>
      <p className="text-gray-700 ">{entrie.content}</p>
      <div className="flex-grow"></div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => btnBack(route)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ShowDetail;

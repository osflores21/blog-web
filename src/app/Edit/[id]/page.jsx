"use client";

import React from 'react'
import Form from '@/components/Form';
import { useRouter } from 'next/navigation';

const URI = "https://blogapi-production-9469.up.railway.app/api/";

const getEntrieById = async (id) => {
  try {
    const url = `${URI}/entrie/${id}`;
    const response = await fetch(url, { cache: "no-store" });
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


const Edit = async ({ params }) => {
  const router = useRouter()
  const id = params.id;

  const data = await getEntrieById(id)
  const onSubmitEdit = async (formData) => {
    const { title, autor, content } = formData;

    try {
      const response = await fetch(`${URI}${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ title, autor, content })
      });

      if (response.ok) {
        router.push("/")
        router.refresh()

      } else {
        throw new Error("Failed to update Entry");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <Form
        onSubmitForm={onSubmitEdit}
        formValues={data}
      />
    </div>
  )
}

export default Edit
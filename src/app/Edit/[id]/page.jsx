"use client";

import React from 'react'
import Form from '@/components/Form';
import { useRouter } from 'next/navigation';
import { getEntrieById } from '@/app/lib/services';
import { updateEntrie } from '@/app/lib/services';

const Edit = async ({ params }) => {
  const router = useRouter()
  const id = params.id;

  const data = await getEntrieById(id)
  const onSubmitEdit = async (formData) => {
    const { title, autor, content } = formData;
    const response = await updateEntrie(id,title, autor, content)
    
    if (response.ok) {
      router.push("/")
      router.refresh()

    } else {
      throw new Error("Failed to update Entry");
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
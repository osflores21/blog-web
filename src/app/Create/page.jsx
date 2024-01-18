"use client";
import React from 'react';
import Form from '@/components/Form';
import { useRouter } from 'next/navigation';
import { formattedDate, generateId } from '../lib/utils';
import { postEntrie } from '../lib/services';

const Create = () => {
  const router = useRouter();
  const onSubmitCreate = async (formData) => {
    const dateCreate = formattedDate();
    const id = generateId();
    const { title, autor, content } = formData;
    const response = await postEntrie(id, title, autor, dateCreate, content);

    if (response.ok) {
      router.push("/");
      router.refresh();
    } else {
      throw new Error("Failed to create Entrie");
    }
  };

  return (
    <div>
      <Form onSubmitForm={onSubmitCreate} />
    </div>
  );
};

export default Create;

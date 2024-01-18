"use client";
import React from 'react'
import Form from '@/components/Form'
import { useRouter } from 'next/navigation'

const URI = "https://blogapi-production-9469.up.railway.app/api/";

const FormattedDate = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  };

  return (
    getCurrentDate()
  );
};

const generateId = () => {
  let id = '';
  for (let i = 0; i < 5; i++) {
    const digitoAleatorio = Math.floor(Math.random() * 10);
    id += digitoAleatorio;
  }
  return id;
}


const Create = () => {
  const router = useRouter()

  const onSubmitCreate = async (formData) => {
    const dateCreate = FormattedDate()
    const id = generateId()
    const { title, autor, content } = formData
    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ id, title, autor, dateCreate, content, })
      })

      if (response.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create Entrie")
      }
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div>
      <Form
        onSubmitForm={onSubmitCreate}
      />
    </div>
  )
}

export default Create
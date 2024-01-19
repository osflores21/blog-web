import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { btnBack } from '@/app/lib/utils';

const BlogEntryForm = ({ formValues, onSubmitForm }) => {
  const route = useRouter();
  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (formValues) {
      setTitle(formValues[0]?.title || '');
      setAutor(formValues[0]?.autor || '');
      setContent(formValues[0]?.content || '');
    }
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, autor, content };
    onSubmitForm(formData);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
    // Ajustar la altura del textarea automáticamente
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-smalt-50 border border-smalt-400 p-4 rounded-md shadow-md max-w-3xl mx-auto mt-8">
      <div className="mb-4 ">
        <label htmlFor="title" className="block text-black font-bold mb-2">
          Title
        </label>
        <input
          id="title"
          className="border border-smalt-400 px-4 py-2 w-full text-black rounded-md focus:outline-none focus:border-smalt-700"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="autor" className="block text-black font-bold mb-2">
          Author
        </label>
        <input
          id="autor"
          className="border border-smalt-400 px-4 py-2 w-full text-black rounded-md focus:outline-none focus:border-smalt-700"
          type="text"
          placeholder="Enter author"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-black font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          className="border border-smalt-400 px-4 py-2 w-full text-black rounded-md focus:outline-none focus:border-smalt-700"
          placeholder="Enter content (max 1000 characters)"
          value={content}
          onChange={handleInputChange}
          maxLength={1000}
          style={{ minHeight: '100px' }} // Altura mínima inicial
        />
      </div>
      <div className="flex items-center justify-center">
        <button type="submit"
          className="inline-block rounded border-2 border-smalt-400 text-smalt-700 hover:border-smalt-700 hover:bg-smalt-600 hover:bg-opacity-10 hover:smalt-800 focus:border-smalt-700 focus:text-smalt-700 active:border-smalt-800 active:text-smalt-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 mr-4">
          Post
        </button>

        <button type="button"
          onClick={() => btnBack(route)}
          className="inline-block rounded border-2 border-red-400 text-red-600 hover:border-red-600 hover:bg-red-600 hover:bg-opacity-10 hover:text-red-800 focus:border-red-700 focus:text-red-700 active:border-red-800 active:text-red-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BlogEntryForm;

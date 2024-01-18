
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BlogEntryForm = ({ formValues, onSubmitForm }) => {
  const router = useRouter();
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

  const btnBack = () => {
    router.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, autor, content };
    onSubmitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-300 p-4 rounded-md shadow-md max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          id="title"
          className="border border-slate-500 px-4 py-2 w-full text-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="autor" className="block text-gray-700 font-bold mb-2">
          Author
        </label>
        <input
          id="autor"
          className="border border-slate-500 px-4 py-2 w-full text-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter author"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          className="border border-slate-500 px-4 py-2 w-full h-20 resize-none text-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter content (max 1000 characters)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={1000}
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Post</button>
        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4" onClick={btnBack}>
          Cancel
        </button>
      </div>
    </form>

  );
};

export default BlogEntryForm;

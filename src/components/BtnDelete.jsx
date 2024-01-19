"use client";
import React from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/navigation';
import { deleteEntrie } from '@/app/lib/services';


const BtnDelete = ({ id }) => {

  const MySwal = withReactContent(Swal)
  const route = useRouter();

  const showMessage = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteEntrie(id)
        if (response.ok) {
          route.refresh()
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }
  return (
    <div>
      <button
        onClick={showMessage}
        className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  )
}

export default BtnDelete
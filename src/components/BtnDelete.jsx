"use client";
import React from 'react'
//Swal
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// router Next
import { useRouter } from 'next/navigation';

const BtnDelete = ({ id }) => {

  const MySwal = withReactContent(Swal)
  const router = useRouter();

  const deleteEntrie = () => {
    const URI = "https://blogapi-production-9469.up.railway.app/api/";

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
        const response = await fetch(`${URI}/${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          console.log("ok")
          router.refresh()
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
        onClick={deleteEntrie}
        className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  )
}

export default BtnDelete
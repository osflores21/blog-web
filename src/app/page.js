import React from 'react'
import ShowPost from '@/components/ShowPost'
export default function Home() {
  return (
    <section>
      <div className='flex justify-center items-center'>
        <div className='w-full max-w-screen-lg'>
          <ShowPost />
        </div>
      </div>
    </section>
  )
}

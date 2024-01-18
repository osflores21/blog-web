import Image from 'next/image'
import ShowEntries from '@/components/ShowEntries'

export default function Home() {
  return (
    <section>
      <div className='flex justify-center items-center'>
      <ShowEntries/>
      </div>
    </section>
  )
}

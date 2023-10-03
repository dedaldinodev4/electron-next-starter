import { Content } from '@/core/components/Content'
import Header from '@/core/components/Header'
import Image from 'next/image'
import { FormSignIn } from './components/SignIn'

export default function Home() {
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className='w-1/2 h-screen hidden lg:block'>
        <div className='bg-hero-pattern object-cover w-full h-full'></div>
      </div>
      <FormSignIn />
    </main>
  )
}

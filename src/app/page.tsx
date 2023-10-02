import { Content } from '@/core/components/Content'
import Header from '@/core/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bg-hero-pattern">
      <div className="h-full">
        <Header />
        <Content />
      </div> 
    </main>
  )
}

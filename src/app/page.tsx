import { FormSignInGitHub } from './components/GitHubRepo/formSignIn'

export default function Home() {
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className='w-1/2 h-screen hidden lg:block'>
        <div className='bg-hero-pattern object-cover w-full h-full'></div>
      </div>
      <FormSignInGitHub />
    </main>
  )
}

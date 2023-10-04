"use client"
import React, { useContext } from 'react'
import { GitHubRepoContext } from '../contexts/GitHubRepoContext'
import { GitHubRepositories } from '../components/GitHubRepo'

export default function Repos() {
  const { user } = useContext(GitHubRepoContext)

  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
     <h1 className='text-lg text-center'>Hello Repos</h1>
     <GitHubRepositories username={user.username}/>
    </main>
  )
}

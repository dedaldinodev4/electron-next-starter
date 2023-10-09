"use client"
import React, { useContext } from 'react'
import { GitHubRepoContext } from '../contexts/GitHubRepoContext'
import { GitHubRepositories } from '../components/GitHubRepo'

export default function Repos() {
  const { user } = useContext(GitHubRepoContext)

  return (
    <>
     <GitHubRepositories username={user.username}/>
    </>
  )
}

"use client"
import React, { ReactNode, createContext, useState } from "react"

export type IGitHubRepoContext = {
  user: IUser;
  login: (username: string, avatar_url: string) => void;
}

export type IUser = {
  username: string;
  avatar_url: string;
}

export const GitHubRepoContext = createContext({} as IGitHubRepoContext);

export const GitHubRepoProvider = ( { children }: { children: ReactNode } ) => {
  const [user, setUser] = useState<IUser>({
    username: '',
    avatar_url: ''
  })

  const login = (username: string, avatar_url: string) => {
    setUser({
      ...user,
      username,
      avatar_url
    })
  }

  return (
    <GitHubRepoContext.Provider value={{ login, user }}>
      {  children }
    </GitHubRepoContext.Provider>
  )
}

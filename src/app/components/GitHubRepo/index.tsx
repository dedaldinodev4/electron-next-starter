import React from 'react';
import { api  } from '@/app/services/api';

export interface IGitHubUser {
  username: string;
}
export const GitHubRepositories: React.FC<IGitHubUser> = async ({ username }: IGitHubUser) => {

  const response = await api.get(`users/${username}/repos`)
  const { data } = response;
  console.log(data)

  return (
    <>

    </>
  );
}

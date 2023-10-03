import axios from 'axios';
import React from 'react';

export interface IGitHubUser {
  username: string;
}
export const GitHubRepositories: React.FC<IGitHubUser> = async ({ username }: IGitHubUser) => {

  const response = await axios.get(`https://api.github.com/users/${username}/repos`)
  console.log(response.data)
  return <div />;
}

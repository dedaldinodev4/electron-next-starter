import React from 'react';
import { api  } from '@/app/services/api';
import axios from 'axios';

import { Repository } from '../Repository';

export interface IGitHubUser {
  username: string;
}
export const GitHubRepositories: React.FC<IGitHubUser> = async ({ username }: IGitHubUser) => {

  //const response = await api.get(`users/${username}/repos`)
  //const { data } = response;
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
  const { data } = response
  console.log(data)

  return (
    <Repository />
  );
}

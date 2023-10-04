"use client"
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';

import { api } from '@/app/services/api';
import { GitHubRepoContext } from '@/app/contexts/GitHubRepoContext';

export interface IFormSignInGitHub {
  username: string;
}

export const FormSignInGitHub: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormSignInGitHub>()
  const [errorRequest, setErrorRequest] = useState(false);
  const { login, user } = useContext(GitHubRepoContext)
  const router = useRouter();



  const onSubmit: SubmitHandler<IFormSignInGitHub> = async (data) => {
    const { username } = data;
    setErrorRequest(false);

    console.log(user)

    try {
      const response = await api.get(`users/${username}`);
      const { data } = response;
  
      login(data.login, data.avatar_url);
      router.push('/repos');

    } catch (error) {
      console.log(error)
      setErrorRequest(state => !state)
    }

  }

  return (
    <>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">GitHub Repos</h1>
        <form noValidate className='group' onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Usuário</label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              {...register("username", { required: true, minLength: 6 })}
            />


            <ErrorMessage
              errors={errors}
              name='username'
              render={({ message }) => <span className="mt-2 text-sm text-red-500">
                Por favor digite um usuário válido.
              </span>}
            />

          </div>
          {errorRequest && (
            <div className="mt-2  text-red-500 text-center">
              {`Usuário inválido ou erro no servidor.`}
            </div>
          )}

          <button

            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full group-invalid:pointer-events-none group-invalid:opacity-30"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-blue-500 text-center">
          <Link href={'https://github.com'} className="hover:underline" target='_blank'>
            Criar uma Conta
          </Link>
        </div>
      </div>
    </>
  )
}


"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';


export interface IFormSignIn {
  email: string;
  password: string;
}

export const FormSignIn: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormSignIn>()

  const onSubmit: SubmitHandler<IFormSignIn> = async (data) => {
    const { email, password } = data;

    console.log(`${email} - ${password}`);

    const response = await axios.get(`https://api.github.com/users/dedaldinodev4`);
  }

  return (
    <>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Entrar</h1>
        <form noValidate className='group' onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">E-mail</label>
            <input
              type="text"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i })}
            />


            <ErrorMessage
              errors={errors}
              name='email'
              render={({ message }) => <span className="mt-2 text-sm text-red-500">
                Por favor digite um Email válido.
              </span>}
            />

          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              {...register("password", {
                required: true,
                min: 8,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
              })}
            />
            <ErrorMessage
              errors={errors}
              name='password'
              render={({ message }) => <span className="mt-2 text-sm text-red-500">
                A senha precisa ser uma forte e contendo no mínimo 8 letras.
              </span>}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
            <label htmlFor="remember" className="text-gray-600 ml-2">Lembrar-Me</label>
          </div>

          <div className="mb-6 text-blue-500">
            <Link href={'auth/forgetPassword'} className='hover:underline'>
              Esqueceu a senha?
            </Link>
          </div>

          <button

            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full group-invalid:pointer-events-none group-invalid:opacity-30"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-blue-500 text-center">
          <Link href={'auth/signup'} className="hover:underline">
            Criar uma Conta
          </Link>
        </div>
      </div>
    </>
  )
}


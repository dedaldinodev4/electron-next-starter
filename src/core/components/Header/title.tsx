import React from 'react';


export const Title: React.FC = () => {
  return (
    <>
      <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        Arga<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">data</span>
      </a>
    </>
  );
}

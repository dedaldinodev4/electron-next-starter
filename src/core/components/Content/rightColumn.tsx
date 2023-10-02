import React from 'react';
import Image from 'next/image';

export const RightColumn: React.FC = () => {
  return (
    <>
      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <Image alt='hero' className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="/macbook.svg" height={100} width={100}  />
      </div>
    </>
  );
}

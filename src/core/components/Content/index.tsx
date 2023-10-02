import React from 'react';
import { LeftColumn } from './leftColumn';
import { RightColumn } from './rightColumn';

export const Content: React.FC = () => {
  return (
    <>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <LeftColumn />
        <RightColumn />
        
      </div>
    </>
  );
}

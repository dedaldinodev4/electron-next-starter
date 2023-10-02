import React from 'react';
import { Title } from './title';
import { Icons } from './icons'

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between">
          <Title />
          <Icons />
        </div>
      </div>

    </>
  );
}

export default Header;
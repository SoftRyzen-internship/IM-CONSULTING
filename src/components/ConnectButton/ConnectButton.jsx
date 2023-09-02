'use client';

import { useState } from 'react';

import data from 'data/data.json';
import Icon from 'public/icons/connect.svg';
import ConnectModal from '../ConnectModal/ConnectModal';

export const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Кнопка Зв'язатися"
        className="flex items-center gap-2 m-0 p-0"
        onClick={toggleModal}
      >
        <Icon />
        <p className="text-accent text-font16 font-formular font-bold leading-[16px]">
          {data.connectBtn}
        </p>
      </button>
      {isOpen && <ConnectModal toggleModal={toggleModal} isOpen={isOpen} />}
    </>
  );
};

'use client';

import { useState } from 'react';

import { ConnectModal } from '../ConnectModal';
import { Form } from '../Form';
import Icon from 'public/icons/consultation.svg';
import data from '@/data/buttons.json';

export const ButtonConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="flex gap-[8px] md:gap-[10px] py-[16px] w-full md:w-[500px] justify-center items-center md:ml-auto bg-accent hover:bg-darkOrange focus:bg-darkOrange transition duration-300"
        onClick={toggleModal}
      >
        <span className="md:text-font24 font-medium md:tracking-[2.4px] text-black">
          {data.consultationBtn}
        </span>

        <Icon className="w-[16px] h-[28px] md:w-[24px] md:h-[36px]" />
      </button>

      {isOpen && (
        <ConnectModal toggleModal={toggleModal} isOpen={isOpen}>
          <Form />
        </ConnectModal>
      )}
    </>
  );
};

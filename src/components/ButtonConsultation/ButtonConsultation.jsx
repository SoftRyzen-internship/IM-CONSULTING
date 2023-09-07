'use client';

import { useState } from 'react';

import { ConnectModal } from '../ConnectModal';
import Icon from 'public/icons/consultation.svg';
import { Form } from '../Form';

export const ButtonConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className="flex gap-[8px] md:gap=[10px] py-[16px] bg-accent w-full md:w-[500px] justify-center items-center md:ml-auto" onClick={toggleModal}>        
        <span className="md:text-font24 font-medium">Безкоштовна консультація</span>
        <Icon className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
      </button>

      {isOpen && (
        <ConnectModal toggleModal={toggleModal} isOpen={isOpen}>
          <Form />
        </ConnectModal>
      )}
    </>
  );
};

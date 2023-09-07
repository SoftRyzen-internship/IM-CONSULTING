'use client';

import { useState } from 'react';

import { ConnectModal } from '../ConnectModal';
import data from '@/data/data.json';
import Icon from 'public/icons/consultation.svg';
import { Form } from '../Form';

export const ConsultationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className="" onClick={toggleModal}>
        <Icon className="" />
        <span className="">{data.connectBtn}</span>
      </button>

      {isOpen && (
        <ConnectModal toggleModal={toggleModal} isOpen={isOpen}>
          <Form />
        </ConnectModal>
      )}
    </>
  );
};

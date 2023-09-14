'use client';

import { useState } from 'react';

import { ConnectModal } from '../ConnectModal';
import { Form } from '../Form';
import { Title } from '../Title';

import data from '@/data/buttons.json';
import form from '@/data/form.json';
import Icon from 'public/icons/connect.svg';

export const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="connectBtn xl:text-accent text-black h-[30px] xl:h-[20px] flex items-center gap-2 transition duration-300 hover:scale-[1.15] focus:scale-[1.15]"
        onClick={toggleModal}
      >
        <Icon className="fill-current w-[24px] h-[24px] xl:w-[16px] xl:h-[16px]" />
        <span className="text-font24 xl:text-font16 font-bold leading-[16px]">
          {data.connectBtn}
        </span>
      </button>

      {isOpen && (
        <ConnectModal toggleModal={toggleModal} isOpen={isOpen}>
          <Title
            tag="h2"
            className="modal-title mb-[24px] md:mb-[36px] xl:mb-[48px] w-[232px] md:w-[342px] xl:w-[500px]"
          >
            {form.title}
          </Title>
          <Form toggleModal={toggleModal} />
        </ConnectModal>
      )}
    </>
  );
};

'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { ConnectModal } from '../ConnectModal';
import { Form } from '../Form';
import data from '@/data/data.json';
import Icon from 'public/icons/connect.svg';

export const ConnectButton = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className={`h-[30px] xl:h-[20px] flex items-center gap-2 duration-300 ease-out hover:scale-[1.15] focus:scale-[1.15] ${
          color === 'accent' ? ' text-accent' : ' text-black'
        }`}
        onClick={toggleModal}
      >
        <Icon className="fill-current w-[24px] h-[24px] xl:w-[16px] xl:h-[16px]" />
        <span className="text-font24 xl:text-font16 font-bold leading-[16px]">
          {data.connectBtn}
        </span>
      </button>

      {isOpen && (
        <ConnectModal toggleModal={toggleModal} isOpen={isOpen}>
          <h2 className="text-white text-font20 md:text-font24 font-light mb-[24px] md:mb[36px] xl:mb-[48px] mx-auto w-[232px] md:w-[342px] xl:w-[500px]">
            <span className="text-accent">[</span>
            <span className="mx-[12px] font-bold">{data.form.title}</span>
            <span className="text-accent">]</span>
          </h2>
          <Form />
        </ConnectModal>
      )}
    </>
  );
};

ConnectButton.propTypes = {
  color: PropTypes.string.isRequired,
};

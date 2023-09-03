'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import data from 'data/data.json';
import Icon from 'public/icons/connect.svg';
import { ConnectModal } from '../ConnectModal';

export const ConnectButton = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className={`flex items-center gap-2 m-0 p-0 transition transform duration-300 ease-out hover:scale-[1.15] ${
          color === 'accent' ? ' text-accent' : ' text-black'
        }`}
        onClick={toggleModal}
      >
        <Icon className="fill-current w-[24px] h-[24px] xl:w-[16px] xl:h-[16px]" />
        <p className="text-font24 xl:text-font16 font-bold leading-[16px]">
          {data.connectBtn}
        </p>
      </button>
      {isOpen && (
        <ConnectModal toggleModal={toggleModal} isOpen={isOpen}>
          {/* <div>Modal Form</div> */}
        </ConnectModal>
      )}
    </>
  );
};

ConnectButton.propTypes = {
  color: PropTypes.string.isRequired,
};

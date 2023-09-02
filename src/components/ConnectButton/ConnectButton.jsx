'use client';

import PropTypes from 'prop-types';

import { useState } from 'react';

import data from 'data/data.json';
import Icon from 'public/icons/connect.svg';
import ConnectModal from '../ConnectModal/ConnectModal';

export const ConnectButton = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Кнопка Зв'язатися"
        className={"flex items-center gap-2 m-0 p-0 text-" + color}
        onClick={toggleModal}
      >
        <Icon className="fill-current" />
        <p className="text-font16 font-formular font-bold leading-[16px]">
          {data.connectBtn}
        </p>
      </button>
      {isOpen && <ConnectModal toggleModal={toggleModal} isOpen={isOpen} />}
    </>
  );
};

ConnectButton.propTypes = {
  color: PropTypes.string.isRequired,
};

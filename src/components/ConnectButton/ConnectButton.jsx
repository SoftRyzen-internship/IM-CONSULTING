'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { ConnectModal } from '../ConnectModal';
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
          <div className="text-white w-[232px] md:w-[342px] xl:w-[500px] mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
            delectus odio distinctio aliquam commodi laborum voluptatem tempore
            doloribus vero omnis repellat quibusdam quidem nulla alias debitis
            ipsa nobis dicta architecto corrupti quam, laudantium dignissimos
            temporibus ipsum? Deserunt incidunt, tenetur soluta dolor maxime
            ducimus ab beatae eveniet magnam corporis consequuntur
            exercitationem.
          </div>
        </ConnectModal>
      )}
    </>
  );
};

ConnectButton.propTypes = {
  color: PropTypes.string.isRequired,
};
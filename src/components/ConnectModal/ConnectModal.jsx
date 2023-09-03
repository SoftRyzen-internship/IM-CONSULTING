import PropTypes from 'prop-types';

import { Dialog, Transition } from '@headlessui/react';
import Icon from 'public/icons/close2.svg';

export default function ConnectModal({ toggleModal, isOpen, children }) {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-70 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-100 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-70 opacity-0"
    >
      <Dialog open={isOpen} onClose={toggleModal} className="relative z-50">
        <div className="fixed inset-0 bg-accent/75" aria-hidden="true">
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="bg-black p-[24px] xl:p-[60px] w-[280px] h-[647px] md:w-[566px] md:h-[826px] xl:w-[724px] xl:h-[978px]">
              <button
                type="button"
                aria-label="Кнопка Закрити модальне вікно"
                className="block ml-auto w-[48px] h-[48px]"
                onClick={toggleModal}
              >
                <Icon className="block mx-auto" />
              </button>
              {children}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

ConnectModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

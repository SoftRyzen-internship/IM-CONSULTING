import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

import Icon from 'public/icons/closeModal.svg';

export const ConnectModal = ({ toggleModal, isOpen, children }) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog open={isOpen} onClose={toggleModal} className="relative z-50">
        <div className="fixed inset-0 bg-accent/75" aria-hidden="true">
          <div className="fixed inset-0 flex items-center justify-center">
            <Transition.Child
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-50 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-50 opacity-0"
            >
              <Dialog.Panel className="bg-black p-[24px] xl:p-[60px] w-[280px] h-[647px] md:w-[566px] md:h-[826px] xl:w-[724px] xl:h-[978px]">
                <button
                  type="button"
                  aria-label="Закрити"
                  className="text-bgColor block ml-auto w-[48px] h-[48px] transition duration-300 ease-out hover:text-accent"
                  onClick={toggleModal}
                >
                  <Icon className="block mx-auto w-[16px] h-[16px] md:w-[24px] md:h-[24px] fill-current" />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ConnectModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

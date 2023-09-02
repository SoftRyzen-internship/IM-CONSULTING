// import PropTypes from 'prop-types';

import { Dialog, Transition } from '@headlessui/react';
import Icon from 'public/icons/close.svg';

export default function ConnectModal({ toggleModal, isOpen, data }) {
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
        <div className="fixed inset-0 bg-black/30" aria-hidden="true">
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
              <button
                type="button"
                aria-label="Кнопка Закрити модальне вікно"
                className="block ml-auto"
                onClick={toggleModal}
              >
                <Icon />
              </button>
              <p>
                {data}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci officiis deleniti eos debitis impedit neque, earum
                accusamus blanditiis hic ut mollitia quaerat perferendis magnam
                architecto dignissimos, obcaecati a quia ipsa?
              </p>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

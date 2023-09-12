'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import form from '@/data/form.json';
import { sendEmail } from '@/utils/sendEmail';
import { sendMessageToTelegram } from '@/utils/sendMessageToTelegram';
import { formSchema } from '@/utils/yupSchema';

import { Loader } from '../Loader';
import { InputField } from '../InputField/InputField';
import ErrorIcon from 'public/icons/close.svg';
import SuccessIcon from 'public/icons/success.svg';
import getButtonClasses from '@/utils/getButtonClass';
import getButtonContent from '@/utils/getButtonContent';

export function Form({ toggleModal }) {
  const {
    name,
    email,
    msg,
    msgPlaceholder,
    sendBtnError,
    sendBtnSuccess,
    sendBtn,
  } = form;

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const buttonClasses = getButtonClasses(formStatus, loading);
  const buttonContent = getButtonContent(
    formStatus,
    loading,
    sendBtn,
    sendBtnSuccess,
    sendBtnError,
    SuccessIcon,
    Loader,
    ErrorIcon,
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const STORAGE_KEY = 'contact_us_form';

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : '',
    setValue,
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setFormStatus('error');
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const onSubmit = async formData => {
    setLoading(true);
    try {
      await sendEmail(formData);
      await sendMessageToTelegram(formData);
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);

      reset();
      if (toggleModal) {
        setTimeout(() => {
          toggleModal();
        }, 3100);
      }
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-[342px] xl:w-[500px] flex flex-col gap-[51px] md:gap-[68px] xl:gap-[80px] mx-auto"
    >
      <div className="flex flex-col gap-[23px] md:gap-[32px]">
        <InputField
          label={name}
          type="text"
          name="name"
          register={register}
          errors={errors}
          placeholder={name}
        />
        <InputField
          label={email}
          type="email"
          name="email"
          register={register}
          errors={errors}
          placeholder={email}
        />
        <InputField
          label={msg}
          type="textarea"
          name="message"
          register={register}
          errors={errors}
          placeholder={msgPlaceholder}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className={buttonClasses}
          disabled={
            loading || formStatus === 'error' || formStatus === 'success'
          }
        >
          {buttonContent}
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  toggleModal: PropTypes.func,
};

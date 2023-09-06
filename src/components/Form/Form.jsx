'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import data from '@/data/data.json';
import { sendEmail } from '@/utils/sendEmail';
import { sendMessageToTelegram } from '@/utils/sendMessageToTelegram';
import { formSchema } from '@/utils/yupSchema';

import { Loader } from '../Loader';
import { InputField } from '../InputField/InputField';
import ErrorIcon from 'public/icons/close.svg';
import SuccessIcon from 'public/icons/success.svg';

export default function Form() {
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

  const { form } = data;
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
      className="w-[232px] md:w-[342px] xl:w-[500px] flex flex-col gap-[51px] md:gap-[68px] xl:gap-[80px] mx-auto"
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
          className={`
    ${
      formStatus === 'success'
        ? 'bg-lightOrange'
        : loading
        ? 'bg-accent'
        : 'bg-accent hover:bg-darkOrange focus:bg-darkOrange transition duration-300'
    }
    ${formStatus === 'error' ? 'bg-red' : ''}
    ${
      loading || formStatus === 'error'
        ? 'cursor-not-allowed'
        : 'cursor-pointer'
    }
    text-[24px] text-black font-normal line-height-[29px] hover:font-medium focus:font-medium transition duration-300
    flex gap-[8px] justify-center items-center self-end text-center w-[212px] py-[8px] h-[45px]
  `}
          disabled={loading || formStatus === 'error'}
        >
          {formStatus === 'success' && (
            <>
              <SuccessIcon /> {sendBtnSuccess}
            </>
          )}
          {loading && <Loader />}
          {formStatus === 'error' && (
            <>
              <ErrorIcon /> {sendBtnError}
            </>
          )}
          {formStatus !== 'success' &&
            !loading &&
            formStatus !== 'error' &&
            sendBtn}
        </button>
      </div>
    </form>
  );
}
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import data from '@/data/data.json';
import ErrorIcon from 'public/icons/close.svg';
import SuccessIcon from 'public/icons/success.svg';
import { sendEmail } from '@/utils/sendEmail';
import { getDefaultFormValues } from '@/utils/getDefaultFormValues';
import { sendMessageToTelegram } from '@/utils/sendMessageToTelegram';
import { formSchema } from '@/utils/yupSchema';
import { Loader } from '../Loader';
export default function Form() {
  const defaultFormValues = getDefaultFormValues();
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
    defaultValues: defaultFormValues,
  });
  const { form } = data;
  const {
    name,
    email,
    title,
    msg,
    msgPlaceholder,
    sendBtnError,
    sendBtnSuccess,
    sendBtn,
  } = form;
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const onClick = () => {
    if (
      errors.name ||
      errors.email ||
      errors.message ||
      errors.name === undefined ||
      errors.email === undefined ||
      errors.message === undefined
    ) {
      setFormStatus('error');
      handleSubmit(onSubmit)();
      const timer = setTimeout(() => {
        setFormStatus(null);
        setLoading(false);
      }, 3000);
      return timer;
    } else {
      handleSubmit(onSubmit)();
    }
  };
  useFormPersist('form', {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : '',
    setValue,
  });
  const onSubmit = async formData => {
    setLoading(true);
    try {
      await sendEmail(formData);
      await sendMessageToTelegram(formData);
      setFormStatus('success');
      localStorage.setItem('form', JSON.stringify(defaultValues));
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      reset(defaultValues);
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
      className="w-[280px] md:w-[342px] xl:w-[500px] flex flex-col gap-[51px] md:gap-[68px] xl:gap-[80px]"
    >
      <div className="flex items-center gap-[20px]">
        <span className="text-accent font-light text-[24px] leading-[29px]">
          [
        </span>
        <h3 className="text-white text-[24px] leading-[29px] font-bold">
          {title}
        </h3>
        <span className="text-accent font-light text-[24px] leading-[29px]">
          ]
        </span>
      </div>
      <div className="flex flex-col gap-[23px] md:gap-[32px]">
        <div className="flex flex-col gap-[8px] md:gap-[12px] relative text-bgColor">
          <label
            htmlFor="name"
            className="text-[16px] font-light leading-[20px] md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]"
          >
            {name} *
          </label>
          <input
            {...register('name', {})}
            type="text"
            className={`${
              errors.name ? 'text-red' : ''
            }  bg-transparent border-[1px] border-solid border-bgColor focus:outline-none p-[8px] md:p-[12px] text-[16px] font-light leading-[20px]  md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]`}
            placeholder={name}
          />
          {errors.name && (
            <p className="text-red absolute top-[75px] right-[0] md:top-[95px] xl:top-[105px] text-[13px] font-light leading-[15px]  font-formular md:text-[16px] md:leading-[20px]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[12px] text-bgColor relative">
          <label
            htmlFor="email"
            className="text-[16px] font-light leading-[20px]  md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]"
          >
            {email} *
          </label>
          <input
            {...register('email', {})}
            type="email"
            className={`${
              errors.email ? 'text-red' : ''
            } bg-transparent border-[1px] border-solid border-bgColor focus:outline-none p-[8px] md:p-[12px] text-[16px] font-light leading-[20px]  md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]`}
            placeholder={email}
          />
          {errors.email && (
            <p className="text-red absolute top-[75px] right-[0] md:top-[95px] xl:top-[105px] text-[13px] font-light leading-[15px] font-formular md:text-[16px] md:leading-[20px] ">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[12px] text-bgColor relative">
          <label
            htmlFor="message"
            className="text-[16px] font-light leading-[20px]  md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]"
          >
            {msg} *
          </label>
          <textarea
            {...register('message', {})}
            className={`${
              errors.message ? 'text-red' : ''
            } bg-transparent h-[168px] border-[1px] border-solid border-bgColor focus:outline-none p-[8px] md:p-[12px] md:h-[252px] xl:h-[265px] resize-none text-[16px] font-light leading-[20px] md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]`}
            placeholder={msgPlaceholder}
          ></textarea>
          {errors.message && (
            <p className="text-red absolute top-[205px] right-[0] md:top-[300px] xl:top-[320px] text-[13px] font-light leading-[15px] font-formular md:text-[16px] md:leading-[20px]">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={onClick}
          className={`${
            formStatus === 'success'
              ? 'bg-lightOrange'
              : loading
              ? 'bg-accent'
              : formStatus === 'error'
              ? 'bg-red'
              : 'bg-accent hover:bg-darkOrange focus:bg-darkOrange'
          } text-center w-[212px] py-[8px]  ${
            loading || formStatus === 'error'
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          } text-[24px] text-black ont-normal line-height-[29px] hover:font-medium focus:font-medium focus:outline-none flex gap-[8px] justify-center items-center self-end`}
          disabled={loading || formStatus === 'error' || errors.length > 0}
        >
          {loading ? (
            <Loader />
          ) : formStatus === 'error' ? (
            <>
              <ErrorIcon /> {sendBtnError}
            </>
          ) : formStatus === 'success' ? (
            <>
              <SuccessIcon /> {sendBtnSuccess}
            </>
          ) : (
            sendBtn
          )}
        </button>
      </div>
    </form>
  );
}

'use client';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import useFormPersist from 'react-hook-form-persist';

import data from 'data/data.json';
import ErrorIcon from 'public/icons/close.svg';
import SuccessIcon from 'public/icons/success.svg';
import { sendEmail } from '@/utils/sendEmail';

export default function Form() {
  const defaultFormValues =
    typeof window !== 'undefined'
      ? {
          name: localStorage.getItem('form')
            ? Object.values(JSON.parse(localStorage.getItem('form')))[0]
            : '',
          email: localStorage.getItem('form')
            ? Object.values(JSON.parse(localStorage.getItem('form')))[1]
            : '',
          message: localStorage.getItem('form')
            ? Object.values(JSON.parse(localStorage.getItem('form')))[2]
            : '',
        }
      : {
          name: '',
          email: '',
          message: '',
        };
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultFormValues,
  });
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
  const storage = typeof window !== 'undefined' ? window.localStorage : '';
  useFormPersist('form', { watch, storage: storage, setValue });
  const onSubmit = async formData => {
    setLoading(true);
    try {
      await sendEmail(formData);
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
      className="w-[280px] md:w-[342px] xl:w-[500px] flex flex-col gap-[24px]"
    >
      <div className="flex items-center gap-[20px]">
        <span className="text-accent font-light text-[24px] leading-[29px]">
          [
        </span>
        <h3 className="text-white text-[24px] leading-[29px] font-bold">
          {data.form.title}
        </h3>
        <span className="text-accent font-light text-[24px] leading-[29px]">
          ]
        </span>
      </div>
      <div className="flex flex-col gap-[23px] md:gap-[32px]">
        <div className="flex flex-col gap-[8px] md:gap-[12px] relative text-bgColor">
          <label
            htmlFor="name"
            className="text-[16px] font-light leading-[20px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]"
          >
            {data.form.name}
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: data.form.nameInvalid,
              minLength: {
                value: 3,
                message: data.form.nameInvalid,
              },
              maxLength: {
                value: 100,
                message: data.form.nameInvalid,
              },
              pattern: {
                value:
                  /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
                message: data.form.nameInvalid,
              },
            }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  className={`${
                    errors.name ? 'text-red' : ''
                  }  bg-transparent border-[1px] border-solid border-bgColor text-white focus:outline-none p-[8px] md:p-[12px] text-[16px] font-light leading-[20px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]`}
                  placeholder={data.form.name}
                />
                {errors.name && (
                  <p className="text-red absolute top-[75px] right-[0] md:top-[95px] text-[13px] font-light leading-[15px] tracking-[-0.04em] font-formular md:text-[16px] md:leading-[20px] ">
                    {errors.name.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[12px] text-bgColor relative">
          <label
            htmlFor="email"
            className="text-[16px] font-light leading-[20px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]"
          >
            {data.form.email}
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: data.form.emailInvalid,
              minLength: {
                value: 6,
                message: data.form.emailInvalid,
              },
              maxLength: {
                value: 63,
                message: data.form.emailInvalid,
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
                message: data.form.emailInvalid,
              },
            }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="email"
                  className={`${
                    errors.email ? 'text-red' : ''
                  } bg-transparent border-[1px] border-solid border-bgColor text-white focus:outline-none p-[8px] md:p-[12px] text-[16px] font-light leading-[20px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]`}
                  placeholder={data.form.email}
                />
                {errors.email && (
                  <p className="text-red absolute top-[75px] right-[0] md:top-[95px] text-[13px] font-light leading-[15px] tracking-[-0.04em] font-formular md:text-[16px] md:leading-[20px] ">
                    {errors.email.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[12px] text-bgColor">
          <label
            htmlFor="message"
            className="text-[16px] font-light leading-[20px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]"
          >
            {data.form.msg}
          </label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <>
                <textarea
                  {...field}
                  className={`${
                    errors.message ? 'text-red' : ''
                  } bg-transparent h-[168px] border-[1px] border-solid border-bgColor focus:outline-none p-[8px] md:p-[12px] resize-none text-[16px] font-light leading-[20px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]`}
                  placeholder={data.form.msgPlaceholder}
                ></textarea>
                {errors.message && <p>{errors.message.message}</p>}
              </>
            )}
          />
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
          } text-[24px] text-black ont-normal line-height-[29px] tracking-[-0.04em] hover:font-medium focus:font-medium focus:outline-none flex gap-[8px] justify-center items-center self-end`}
          disabled={loading || formStatus === 'error' || errors.length > 0}
        >
          {loading ? (
            'Відправка...'
          ) : formStatus === 'error' ? (
            <>
              <ErrorIcon /> {data.form.sendBtnError}
            </>
          ) : formStatus === 'success' ? (
            <>
              <SuccessIcon /> {data.form.sendBtnSuccess}
            </>
          ) : (
            data.form.sendBtn
          )}
        </button>
      </div>
    </form>
  );
}

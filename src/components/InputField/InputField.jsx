export const InputField = ({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
}) => (
  <div className="flex flex-col gap-[8px] md:gap-[12px] relative text-bgColor">
    <label
      htmlFor={name}
      className="text-[16px] font-light leading-[20px] md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]"
    >
      {label} *
    </label>

    {type === 'textarea' ? (
      <textarea
        id={name}
        {...register(name)}
        className={`${
          errors[name] ? 'text-red' : ''
        } input-field bg-transparent h-[168px] border-[1px] border-solid border-bgColor p-[8px] md:p-[12px] md:h-[252px] xl:h-[265px] resize-none text-[16px] font-light leading-[20px] md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]`}
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        id={name}
        {...register(name)}
        type={type}
        className={`${
          errors[name] ? 'text-red' : ''
        } input-field bg-transparent border-[1px] border-solid border-bgColor p-[8px] md:p-[12px] text-[16px] font-light leading-[20px]  md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[29px]`}
        placeholder={placeholder}
        autoComplete="true"
      />
    )}

    {errors[name] && (
      <p
        className={`${
          type === 'textarea'
            ? 'top-[210px] md:top-[300px] xl:top-[318px]'
            : 'top-[75px] md:top-[95px] xl:top-[105px]'
        } text-red absolute right-[0] text-[13px] font-light leading-[15px] md:text-[16px] md:leading-[20px]`}
      >
        {errors[name].message}
      </p>
    )}
  </div>
);

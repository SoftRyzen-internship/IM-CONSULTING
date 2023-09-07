import React from 'react';

export const ReviewCard = ({
  rating,
  ratingText,
  company,
  post,
  name,
  review,
}) => {
  return (
    <>
      <div className="flex justify-between  text-orange cursor-swiper">
        <p className="text-[60px] md:text-[66px] xl:text-[116px] leading-[73px] md:leading-[81px] xl:leading-[142px] opacity-10">
          {rating}
        </p>
        <div className="text-right">
          <p className="text-[36px] xl:text-[56px]  leading-[44px] xl:leading-[68px]  tracking-widest opacity-10 ">
            {ratingText}
          </p>
          <h3 className="title-brackets text-font16 xl:text-font24">
            <span className="text-black font-bold">{company}</span>
          </h3>
        </div>
      </div>
      <p className="text-font16 text-right mb-2">
        {post} <span className="font-medium">{name}</span>
      </p>
      <p className="text-font16 xl:text-[24px] xl:leading-[30px] text-justify md:pb-[0px] ">
        {review}
      </p>
    </>
  );
};

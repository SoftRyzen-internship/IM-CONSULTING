import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../Title';

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
        <p className="text-[60px] md:text-[66px] xl:text-[116px] leading-[73px] md:leading-[81px] xl:leading-[142px] md:tracking-widest opacity-10">
          {rating}
        </p>
        <div className="text-right">
          <p className="text-[36px] xl:text-[56px]  leading-[44px] xl:leading-[68px]  tracking-widest opacity-10 ">
            {ratingText}
          </p>
          <Title
            tag="h3"
            className="review-title text-font16 xl:text-font24 multiline-ellipsis"
          >
            <span className="text-black font-bold">{company}</span>
          </Title>
        </div>
      </div>
      <p className="text-font16 text-right mb-2 multiline-ellipsis">
        {post} <span className="font-medium">{name}</span>
      </p>
      <p className="text-font16 xl:text-[24px] xl:leading-[30px] text-justify multiline-ellipsis max-lines-18">
        {review}
      </p>
    </>
  );
};

ReviewCard.propTypes = {
  rating: PropTypes.string.isRequired,
  ratingText: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

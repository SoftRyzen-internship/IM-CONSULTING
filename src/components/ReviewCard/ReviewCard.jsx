import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../Title';
import { truncateText } from '@/utils/truncateText';
const MAX_SYMBOLS_PER_REVIEW = 584;

export const ReviewCard = ({
  rating,
  ratingText,
  company,
  post,
  name,
  review,
}) => {
  const reviewNormalized = truncateText(review, MAX_SYMBOLS_PER_REVIEW);

  return (
    <>
      <div className="flex justify-between  text-orange ">
        <p className="text-[60px] md:text-[66px] xl:text-[116px] leading-[73px] md:leading-[81px] xl:leading-[142px] md:tracking-widest opacity-10">
          {rating}
        </p>
        <div className="text-right">
          <p className="text-[36px] xl:text-[56px]  leading-[44px] xl:leading-[68px]  tracking-widest opacity-10 ">
            {ratingText}
          </p>
          <div className="h-[40px]">
            {company && (
              <Title
                tag="h3"
                className="review-title text-font16 xl:text-font24 multiline-ellipsis-2 "
              >
                <span className="text-black font-bold ">{company}</span>
              </Title>
            )}
          </div>
        </div>
      </div>
      <p className="text-font16 text-right mb-2 multiline-ellipsis-2 h-[40px]">
        {post} <span className="font-medium whitespace-nowrap">{name}</span>
      </p>
      <p className="text-font16 xl:text-[24px] xl:leading-[30px] text-justify">
        {reviewNormalized}
      </p>
    </>
  );
};

ReviewCard.propTypes = {
  rating: PropTypes.string.isRequired,
  ratingText: PropTypes.string.isRequired,
  company: PropTypes.string,
  post: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

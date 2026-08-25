import React from 'react';

// Import the 10 photorealistic high-res YouTube thumbnail artwork files
import moneyShowImg from '../assets/images/money_show_thumb_1787663628008.jpg';
import zeroToCroreImg from '../assets/images/zero_to_crore_1787663645648.jpg';
import aaronGamingImg from '../assets/images/aaron_gaming_1787663667198.jpg';
import learnCodingImg from '../assets/images/learn_coding_1787663712941.jpg';
import boardsExamImg from '../assets/images/boards_exam_1787663685213.jpg';
import dontBuyThisImg from '../assets/images/dont_buy_this_1787663729937.jpg';
import startBusinessImg from '../assets/images/start_business_1787663753073.jpg';
import studentIncomeImg from '../assets/images/student_income_1787663700059.jpg';
import youNeedThisImg from '../assets/images/you_need_this_1787663770357.jpg';
import travelDiariesImg from '../assets/images/travel_diaries_1787663793852.jpg';

export const PRESET_IMAGES: Record<string, string> = {
  'the-money-show': moneyShowImg,
  'preset:the-money-show': moneyShowImg,
  'zero-to-crore': zeroToCroreImg,
  'preset:zero-to-crore': zeroToCroreImg,
  'aaron-gaming': aaronGamingImg,
  'preset:aaron-gaming': aaronGamingImg,
  'learn-coding-30-days': learnCodingImg,
  'preset:learn-coding-30-days': learnCodingImg,
  'boards-95-guarantee': boardsExamImg,
  'preset:boards-95-guarantee': boardsExamImg,
  'dont-buy-this': dontBuyThisImg,
  'preset:dont-buy-this': dontBuyThisImg,
  'how-to-start-business': startBusinessImg,
  'preset:how-to-start-business': startBusinessImg,
  'students-15k-month': studentIncomeImg,
  'preset:students-15k-month': studentIncomeImg,
  'you-need-this': youNeedThisImg,
  'preset:you-need-this': youNeedThisImg,
  'travel-diaries': travelDiariesImg,
  'preset:travel-diaries': travelDiariesImg,
};

interface ThumbnailRendererProps {
  id?: string;
  imageUrl?: string;
  title: string;
  category?: string;
  className?: string;
  aspectRatio?: string;
}

export const ThumbnailRenderer: React.FC<ThumbnailRendererProps> = ({
  id,
  imageUrl,
  title,
  category,
  className = "w-full h-full object-cover",
}) => {
  // Check if a direct preset key exists in PRESET_IMAGES
  const presetKey = (imageUrl && PRESET_IMAGES[imageUrl])
    ? imageUrl
    : (id && PRESET_IMAGES[id])
      ? id
      : null;

  const resolvedSource = presetKey
    ? PRESET_IMAGES[presetKey]
    : (imageUrl && !imageUrl.startsWith('preset:'))
      ? imageUrl
      : (id && PRESET_IMAGES[id])
        ? PRESET_IMAGES[id]
        : moneyShowImg;

  return (
    <img
      src={resolvedSource}
      alt={title}
      referrerPolicy="no-referrer"
      className={className}
      loading="lazy"
    />
  );
};


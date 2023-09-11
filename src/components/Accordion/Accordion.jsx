'use client';
import { useState, useRef } from 'react';
// import { ButtonConsultation } from '../ButtonConsultation';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRef = useRef(null);

  const onTitleClick = index => {
    if (index === activeIndex) {
      return;
    } else {
      setActiveIndex(index);
      const el = itemRef.current;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <ol className="text-bgColor leading-[1.33]" ref={itemRef}>
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <li
            key={item.id}
            className="relative z-[1] bg-black pt-2 -mt-2 md:pt-3 md:-mt-[14px]"
          >
            <button
              className={`cursor-pointer w-full pt-2 md:pt-3 border-t flex justify-between gap-4 xl:gap-[482px] transition duration-300 ease-in ${
                isActive
                  ? 'text-accent border-accent md:justify-start md:gap-[309px]'
                  : 'text-[#4D4D4D] border-[#4D4D4D] xl:justify-start '
              }`}
              onClick={() => onTitleClick(index)}
              type="button"
            >
              <span className="text-[12px] md:text-[24px] tracking-[1.2px] md:tracking-[2.4px]">
                {item.id}
              </span>
              <h3 className="font-medium text-start md:text-[32px] xl:text-[36px] md:tracking-[-1.28px] xl:tracking-[0]">
                {item.title}
              </h3>
            </button>
            {isActive ? (
              <div className="pt-6 pb-8 md:pt-9 md:pb-12 xl:pt-12 xl:pb-[60px] h-auto opacity-100 transition-all duration-300">
                <ul className="space-y-2 md:space-y-4 xl:space-y-2">
                  {item.content.map(subItem => (
                    <li
                      key={subItem.subtitle}
                      className="space-y-2 md:space-y-4 pb-3 tracking-[-0.64px] md:text-[24px] md:tracking-[-0.96px] border-b border-[#4D4D4D] last:border-none"
                    >
                      <h4 className="text-accent border-accent">
                        {subItem.subtitle}
                      </h4>
                      <p className="font-light">{subItem.text}</p>
                    </li>
                  ))}
                </ul>
                {/* <ButtonConsultation /> */}
              </div>
            ) : (
              <div className="p-0 h-0 opacity-0 transition-all duration-300"></div>
            )}
          </li>
        );
      })}
    </ol>
  );
};

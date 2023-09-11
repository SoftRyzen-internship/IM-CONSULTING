'use client';
import { useState, useRef, useEffect } from 'react';
// import { ButtonConsultation } from '../ButtonConsultation';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRef = useRef(null);

  const onTitleClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
    const el = itemRef.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const subItemRefs = itemRef.current.querySelectorAll('.subItem');

    subItemRefs.forEach((subItemRef, index) => {
      if (activeIndex === index) {
        subItemRef.style.maxHeight = subItemRef.scrollHeight + 'px';
      } else {
        subItemRef.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

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
              className={`cursor-pointer w-full pt-2 md:pt-3 border-t flex justify-between gap-4 xl:justify-start xl:gap-[482px] transition duration-300 ease-in ${
                isActive
                  ? 'text-accent border-accent'
                  : 'text-[#4D4D4D] border-[#4D4D4D] '
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

            <div
              className={`subItem box-content overflow-hidden transition-all duration-1000 ${
                isActive
                  ? 'pt-6 pb-8 md:pt-9 md:pb-12 xl:pt-12 xl:pb-[60px]'
                  : 'p-0'
              }`}
            >
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
                    {/* < ButtonConsultation /> */}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

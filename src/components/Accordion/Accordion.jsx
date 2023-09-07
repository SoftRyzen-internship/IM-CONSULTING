'use client';
import { useState } from 'react';
// import { ButtonConsultation } from '../ButtonConsultation';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <ol className="accordion">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <li key={item.id} className="accordion-item">
            <div
              className={`accordion-title-box ${isActive ? 'active' : ''}`}
              onClick={() => onTitleClick(index)}
            >
              <span className="accordion-count">{item.id}</span>
              <h2 className="accordion-title">{item.title}</h2>
            </div>
            <div
              className={`accordion-content-box ${isActive ? 'active' : ''}`}
            >
              <div className="accordion-content">
                <ul className="accordion-content-list">
                  {item.content.map(subItem => (
                    <li
                      key={subItem.subtitle}
                      className="accordion-content-item"
                    >
                      <h3 className="accordion-subtitle">{subItem.subtitle}</h3>
                      <p className="accordion-text">{subItem.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  {/* <ButtonConsultation /> */}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

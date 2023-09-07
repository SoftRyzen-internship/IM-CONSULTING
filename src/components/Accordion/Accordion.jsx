'use client';
import { useState } from 'react';

export const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onTitleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	}
  return (
    <ol className="accordion">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <li key={item.id}>
            <div
              className={`accordion-item ${isActive ? 'active' : ''}`}
              onClick={() => onTitleClick(index)}
						>
							<span className="accordion-count">{item.id}</span>
							<h2 className="accordion-title">{item.title}</h2>
            </div>
            {isActive && (
              <ul className='accordion-content'>
                {item.content.map((subItem) => (
                  <li key={subItem.subtitle}>
                    <h3 className='accordion-subtitle'>{subItem.subtitle}</h3>
                    <p className='accordion-text'>{subItem.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
};
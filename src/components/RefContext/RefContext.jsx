'use client';

import React, { createContext, useContext, useRef } from 'react';

const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const navbarRef = useRef();
  const intersectingElementRef = useRef();

  return (
    <RefContext.Provider value={{ navbarRef, intersectingElementRef }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefs = () => {
  return useContext(RefContext);
};

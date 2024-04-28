// ScrollContext.js
import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const targetRefs = useRef([]);

  const scrollToDiv = (index) => {
    targetRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollToDiv, targetRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

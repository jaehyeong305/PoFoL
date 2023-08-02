import React, { createContext, useContext, useState } from 'react';

// NOTE(hajae): scroll의 높이 상태를 관리
const ScrollContext = createContext<number>(0);

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

type ScrollProviderProps = {
    children: React.ReactNode;
};

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    setScrollPosition(scrollHeight);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollPosition}>
      {children}
    </ScrollContext.Provider>
  );
};

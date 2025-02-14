import React, { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [resetCursorState, setResetCursorState] = useState(false);

  const triggerCursorReset = () => {
    setResetCursorState(prevState => !prevState);
  };

  return (
    <CursorContext.Provider value={{ resetCursorState, triggerCursorReset }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);

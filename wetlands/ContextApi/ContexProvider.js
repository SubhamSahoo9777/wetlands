import React, { useState } from 'react';
import MyContext from './CreateContext';

const ContextProvider = ({ children }) => {
  const [contextData, setContextData] = useState({ testing: "sagar" });

  return (
    <MyContext.Provider value={{ contextData, setContextData }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;

import React, { createContext, useState } from "react";

export const ModeContext = createContext();

export default function Mode__context({ children }) {
  const [dark, setDark] = useState(true);
  const handleDark = () => {
    setDark(!dark);
  };
  return (
    <ModeContext.Provider value={{ dark, handleDark }}>
      {children}
    </ModeContext.Provider>
  );
}

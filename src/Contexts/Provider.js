import React, { createContext, useState } from 'react';

export default function Provider(props) {
  const [state, setState] = useState({
    isOpen:true,
    color:null
  });

  return (
    <UIContext.Provider value={[state, setState]}>
      {props.children}
    </UIContext.Provider>
  );
};


export const UIContext = createContext();

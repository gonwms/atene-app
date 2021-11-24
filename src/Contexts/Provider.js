import React, { createContext, useState } from 'react';

const Provider = (props) => {
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

export default Provider;
export const UIContext = createContext();

import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import Router from './routes';


interface AccountActiveType {
  activeAccount: any;
  
  setActiveAccount: Dispatch<SetStateAction<boolean>>; 
}

export const AccountActive = createContext<AccountActiveType>({
  activeAccount: false,
  setActiveAccount: () => {}
});

function App() {
  const [activeAccount, setActiveAccount] = useState({});

  return (
    <>
      <AccountActive.Provider value={{ activeAccount, setActiveAccount } as any}>
        <Router />
      </AccountActive.Provider>

    </>
  )
}

export default App;

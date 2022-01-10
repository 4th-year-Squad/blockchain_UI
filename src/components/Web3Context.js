import React, { createContext, useEffect, useState } from "react";
import Web3Instance from "../Web3/Web3Instance";

const Web3Context = createContext();

export { Web3Context };

const Web3ContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState();
  const [health, setHealth] = useState();

  const loadBlockChain = async () => {
    setHealth(Web3Instance.auction);
    setAccounts(await Web3Instance.accounts);
  };

  useEffect(() => {
    loadBlockChain();
  }, []);
  return (
    <Web3Context.Provider value={{ accounts, health }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;

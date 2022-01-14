import React, { createContext, useEffect, useState } from "react";
import Web3Instance from "../Web3/Web3Instance";
import { useCookies } from "react-cookie";

const Web3Context = createContext();

export { Web3Context };

const Web3ContextProvider = ({ children }) => {
  window.ethereum.on("accountsChanged", function (accounts) {
    window.location.reload();
  });

  const [accounts, setAccounts] = useState();
  const [medify, setmedify] = useState();
  const [cookies, setCookie] = useCookies(["name"]);

  const loadBlockChain = async () => {
    // setmedify(await Web3Instance.medify);
    // setAccounts(await Web3Instance.accounts);
    return new Promise(async (resolve, reject) => {
      try {
        const medify = await Web3Instance.medify;
        const accounts = await Web3Instance.accounts;

        const isDoctor = await medify.methods.DoctorInfo(accounts[0]).call();
        const isPatient = await medify.methods.PatientInfo(accounts[0]).call();
        const isUniveristy = await medify.methods
          .UniversityInfo(accounts[0])
          .call();
        if (
          isDoctor.dr_Id.toString() !==
          "0x0000000000000000000000000000000000000000"
        ) {
          setCookie("user", "doctor");
          setCookie("userId", accounts[0]);
          setCookie("hasAccount", true);
        } else if (
          isPatient.pa_Id.toString() !==
          "0x0000000000000000000000000000000000000000"
        ) {
          setCookie("user", "patient");
          setCookie("userId", accounts[0]);
          setCookie("hasAccount", true);
        } else if (
          isUniveristy._uId.toString() !==
          "0x0000000000000000000000000000000000000000"
        ) {
          setCookie("user", "univeristy");
          setCookie("userId", accounts[0]);
          setCookie("hasAccount", true);
        } else {
          setCookie("hasAccount", false);
        }

        resolve({ medify, accounts });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  useEffect(async () => {
    await loadBlockChain();
  }, []);
  return (
    <Web3Context.Provider value={loadBlockChain}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;

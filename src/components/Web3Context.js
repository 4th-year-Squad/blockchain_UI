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

        if (
          accounts[0].toString() ===
          "0x12987F47574D86565532Ed272C0d08E7C3550c65"
        ) {
          setCookie("user", "moh");
          setCookie("userId", accounts[0]);
          setCookie("hasAccount", true);
          console.log("in moh");
        } else {
          medify.methods
            .DoctorInfo(accounts[0])
            .call()
            .then((d) => {
              if (
                d.dr_Id.toString() !==
                "0x0000000000000000000000000000000000000000"
              ) {
                setCookie("user", "doctor");
                setCookie("userId", accounts[0]);
                setCookie("hasAccount", true);
                setCookie("isVerified", d.state);
                console.log("in doctor");
              } else {
                medify.methods
                  .PatientInfo(accounts[0])
                  .call()
                  .then((p) => {
                    if (
                      p.pa_Id.toString() !==
                      "0x0000000000000000000000000000000000000000"
                    ) {
                      setCookie("user", "patient");
                      setCookie("userId", accounts[0]);
                      setCookie("hasAccount", true);
                      console.log("in patient");
                    } else {
                      medify.methods
                        .UniversityInfo(accounts[0])
                        .call()
                        .then((u) => {
                          if (
                            u._uId.toString() !==
                            "0x0000000000000000000000000000000000000000"
                          ) {
                            setCookie("user", "univeristy");
                            setCookie("userId", accounts[0]);
                            setCookie("hasAccount", true);
                            console.log("in uni");
                          } else {
                            console.log("in no acc");
                            setCookie("user", "");
                            setCookie("hasAccount", false);
                          }
                        });
                    }
                  });
              }
            });
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

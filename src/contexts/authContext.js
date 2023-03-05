/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import React, { createContext, useContext, useEffect, useState } from "react";

import { app } from "@/firebase/firebase";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  // const signin = async (email, password) => {

  // };
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        uid.length === 12
          ? setCurrentUser(uid)
          : signOut(auth)
              .then(() => {
                // navigate("/login");
              })
              .catch((error) => {
                // An error happened.
              });
        setLoading(false);
      } else {
        setLoading(false);
        setCurrentUser(null);
      }
    });
  }, [loading, currentUser]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

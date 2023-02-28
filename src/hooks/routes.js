import { useUserContext } from "@/contexts/authContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export function loggedIn(Component) {
  return function LoggedIn(props) {
    const { currentUser } = useUserContext();
    const router = useRouter();
    if (currentUser) {
      router.replace("/account");
      return <p>loading</p>;
    }
    return <Component currentUser={currentUser} {...props} />;
  };
}
export function loggedOut(Component) {
  return function LoggedOut(props) {
    const { currentUser, loading } = useUserContext();
    const router = useRouter();
    useEffect(() => {
      if (!loading && currentUser === null) {
        router.replace("/");
      }
    }, [loading]);

    return <Component currentUser={currentUser} {...props} />;
  };
}

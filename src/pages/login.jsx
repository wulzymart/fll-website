import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "@/firebase/firebase";
import Image from "next/image";
import Input from "@/components/input";
import { loggedIn } from "@/hooks/routes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen flex items-center  ">
      <div className="flex flex-col gap-4 w-[80%] md:w-[300px] mx-auto">
        <div className="w-20 mx-auto mb-6">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="first line logistics logo"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <label htmlFor="email" value="Your email" />
          </div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <label htmlFor="password" value="Your password" />
          </div>
          <Input
            id="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default loggedIn(Login);

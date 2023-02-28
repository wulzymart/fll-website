import { idGenerator } from "@/AppBrain";
import { db } from "@/firebase/firebase";
import { openModal } from "@/modalcontrol";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

const Signup = ({ message }) => {
  const [ecommerceUser, setEcommerceUser] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEcommerceUser({ ...ecommerceUser, [name]: value });
  };
  const handleSubmit = () => {
    const id = idGenerator(5);
    const signUpRef = doc(db, "ecommerceSignUps", id);
    setDoc(signUpRef, ecommerceUser).then(() => {
      openModal("SignUpSuccess");
      setEcommerceUser({
        firstName: "",
        lastName: "",
        businessName: "",
        phoneNumber: "",
        email: "",
      });
    });
  };

  return (
    <div className="w-full md:w-[40%] bg-gray-100 rounded-lg p-8 flex flex-col   mt-10 md:mt-0">
      <h2 className="text-gray-900 text-xl font-bold font-body">Sign up</h2>
      <p className="text-gray-900">{message}</p>
      <div className="relative my-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <div className="flex gap-4 w-full">
          <input
            type="text"
            name="firstName"
            value={ecommerceUser.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-full md:w-[45%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={ecommerceUser.lastName}
            onChange={handleInputChange}
            className="w-full md:w-[45%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Business Name
        </label>
        <input
          type="text"
          name="businessName"
          value={ecommerceUser.businessName}
          onChange={handleInputChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={ecommerceUser.phoneNumber}
          onChange={handleInputChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={ecommerceUser.email}
          onChange={handleInputChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Request Partnership
      </button>
      <SuccessModal
        id="SignUpSuccess"
        message="Your details have been received, We will contact you shortly"
      />
    </div>
  );
};

export default Signup;

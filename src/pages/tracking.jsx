import React from "react";
import TrackingInput from "../Components/TrackingInput";

const Tracking = () => {
  return (
    <main>
      <div className="bg-black px-10  py-20 md:px-40 lg:px-52">
        <TrackingInput />
        <p className="text-gray-200 mt-2 text-center">
          Track your Items using your tracking number
        </p>
      </div>
      <section className="text-gray-600 body-font bg-ecommerce bg-cover relative">
        <div className="bg-black opacity-90 absolute w-full h-full  z-10]"></div>
        <div className="container px-5 py-24 mx-auto flex flex-col gap-20 items-center relative z-30">
          <div className="w-full ">
            <h2 className="title-font font-bold font-body text-3xl text-white ">
              Do you have an account?
            </h2>
          </div>
          <div className="flex flex-wrap w-full gap-20">
            <div className="w-full md:w-[45%] bg-gray-100 rounded-lg p-8 flex flex-col   mt-10 md:mt-0">
              <h2 className="text-gray-900 text-xl font-bold font-body">
                Sign up
              </h2>
              <p className="text-gray-900">Partner with us today</p>
              <div className="relative my-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="business-name"
                  name="businessName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phoneNumber"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Request Partnership
              </button>
            </div>
            <div className="w-full md:w-[45%] h-fit bg-gray-100 rounded-lg p-8 flex flex-col  mt-10 md:mt-0">
              <h2 className="text-gray-900 text-xl font-bold font-body">
                Sign in
              </h2>
              <p className="text-gray-900">
                Access your account, view your wallet and shipments
              </p>

              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tracking;

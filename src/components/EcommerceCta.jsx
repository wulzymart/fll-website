import React from "react";

const EcommerceCta = () => {
  return (
    <section className="text-gray-600 body-font bg-[url('/fll2.jpeg')] bg-cover relative">
      <div className="bg-black opacity-90 absolute w-full h-full  z-10]"></div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center relative z-30">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h2 className="title-font font-bold font-body text-3xl text-white ">
            A trusted logistics solution for your E commerce business
          </h2>
          <p className="leading-relaxed mt-4 text-white text-xl">
            You dont have to worry any more. We can handle all your shipping
            across the nation. We charge all transactions from your wallet,
            while you charge your clients a convonient fee.
          </p>

          <p className="text-3xl font-bold text-blue-500 mt-3">
            Partner with us today
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-xl font-bold font-body">Sign Up</h2>
          <p className="text-gray-900">We will contact you in minutes</p>
          <div className="relative my-4">
            <label className="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Request Partnership
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceCta;

import React from "react";

const Quotation = () => {
  return (
    <main>
      <h2 className=" text-gray-900 text-3xl font-bold font-body text-center  m-20">
        Get a Quote
      </h2>

      <div>
        <div className="w-full bg-gray-100 rounded-lg p-8 md:p-20 flex flex-col  mt-10 md:mt-0 pb-20">
          <h2 className="w-full text-gray-900 text-xl font-bold font-body px-5 ">
            Enter the following information
          </h2>
          <p className="w-full text-gray-500 px-5 mb-5">
            We will contact you in minutes
          </p>
          <p className="w-full text-red-500 px-5 ">
            Small items less than 10kg are cartegorized as parcels, while items
            more than 10kg will be categorised as cargo.
          </p>
          <div className="w-full flex flex-wrap">
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Origin State
              </label>
              <select
                name="originState"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="">Select one</option>
                <option className="" value="State 1">
                  State 1
                </option>
                <option className="" value="State 2">
                  State 2
                </option>
                <option className="" value="State 3">
                  State 3
                </option>
              </select>
            </div>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Destination State
              </label>
              <select
                name="destinationState"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="">Select one</option>
                <option className="" value="State 1">
                  State 1
                </option>
                <option className="" value="State 2">
                  State 2
                </option>
                <option className="" value="State 3">
                  State 3
                </option>
              </select>
            </div>
            <div className="relative w-1/2 md:w-1/4 p-5">
              <label className="leading-7 text-sm text-gray-600">Type</label>
              <select
                name="type"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="">Select one</option>
                <option className="" value="Document">
                  Document
                </option>
                <option className="" value="Parcel">
                  Parcel
                </option>
                <option className="" value="Cargo">
                  Cargo
                </option>
              </select>
            </div>
            <div className="relative w-1/2 md:w-1/4 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-1/2 md:w-1/4 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Estimated Weight
              </label>
              <input
                type="number"
                name="weight"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-1/2 md:w-1/4 p-5">
              <label className="leading-7 text-sm text-gray-600">Value</label>
              <input
                type="value"
                name="value"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-full p-5">
              <label className="leading-7 text-sm text-gray-600">
                Item Description
              </label>
              <textarea
                name="itemDescription"
                rows="5"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <button className="text-white bg-blue-600 border-0 py-2 px-8 mx-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Get Quote
          </button>
        </div>
      </div>
    </main>
  );
};

export default Quotation;

import { idGenerator } from "@/AppBrain";
import Header1 from "@/components/Header1";
import SuccessModal from "@/components/SuccessModal";
import { useUserContext } from "@/contexts/authContext";
import { db } from "@/firebase/firebase";
import { openModal } from "@/modalcontrol";
import axios from "axios";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";

const PickUpRequest = ({ states, statesList }) => {
  const [request, setRequest] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    originState: "",
    nearestStation: "",
    originAddress: "",
    destinationState: "",
    destinationAddress: "",
    weight: "",
    value: "",
    quantity: "",
    description: "",
    deliveryType: "",
    serviceType: "",
    destinationStation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequest({
      ...request,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      originState,
      nearestStation,
      originAddress,
      destinationState,
      destinationAddress,
      weight,
      description,
      deliveryType,
      serviceType,
      destinationStation,
    } = request;

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !originState ||
      !nearestStation ||
      !originAddress ||
      !destinationState ||
      !weight ||
      !description ||
      !deliveryType ||
      !serviceType
    ) {
      alert("Ensure all required fields are filled");
      return;
    } else if (
      (deliveryType === "To Station" && !destinationStation) ||
      (deliveryType === "To Door" && !destinationAddress)
    ) {
      alert("Ensure all required fields are filled");
      return;
    }
    const id = idGenerator(5);
    const pickupRef = doc(db, "pickups", id);
    setDoc(pickupRef, {
      ...request,
      id,
      dateCreated: serverTimestamp(),
      attendedTo: false,
    }).then(() => {
      openModal("success");
      setRequest({
        firstName: "",
        lastName: "",
        businessName: "",
        phoneNumber: "",
        email: "",
        originState: "",
        nearestStation: "",
        originAddress: "",
        destinationState: "",
        destinationAddress: "",
        weight: "",
        value: "",
        quantity: "",
        description: "",
        deliveryType: "",
        serviceType: "",
        destinationStation: "",
      });
    });
  };
  return (
    <main>
      <Header1 title="Request Pick up" />

      <div>
        <div className="w-full bg-gray-100 rounded-lg p-8 md:p-20 flex flex-col  mt-10 md:mt-0 pb-20">
          <h2 className="w-full text-gray-900 text-xl font-bold font-body px-5 ">
            Enter the following information
          </h2>
          <p className="w-full text-gray-500 px-5 mb-5">
            We will contact you in minutes
          </p>

          <p className="w-full text-red-500 px-5 ">
            *Note that your Identity details will be verified on arrival of our
            field staff, before entering your premises.
          </p>
          <div className="w-full flex flex-wrap">
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <div className="flex gap-4 w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={request.firstName}
                  required
                  onChange={handleInputChange}
                  className=" w-1/2  bg-white rounded border border-gray-300 invalid:border-red-400  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={request.lastName}
                  onChange={handleInputChange}
                  required
                  className=" w-1/2 bg-white rounded border border-gray-300 invalid:border-red-400  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={request.businessName}
                onChange={handleInputChange}
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
                value={request.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 invalid:border-red-400  focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                required
                value={request.email}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 invalid:border-red-400  focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <p className="relative  w-full p-5">Address information</p>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">State</label>
              <select
                name="originState"
                value={request.originState}
                onChange={handleInputChange}
                required
                className="w-full h-11 bg-white rounded border border-gray-300 invalid:text-red-400  focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="" value={""}>
                  Select one
                </option>
                {statesList.map((state, i) => (
                  <option key={i} className="" value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Nearest Station
              </label>
              <select
                name="nearestStation"
                value={request.nearestStation}
                onChange={handleInputChange}
                required
                className="w-full h-11 bg-white rounded border border-gray-300 invalid:text-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="" value="">
                  Select one
                </option>
                {request.originState
                  ? Object.keys(states[request.originState]?.stations)?.map(
                      (station, i) => (
                        <option key={i} className="" value={station}>
                          {station}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Street Address
              </label>
              <textarea
                name="originAddress"
                value={request.originAddress}
                onChange={handleInputChange}
                required
                className="w-full h-11 bg-white rounded border border-gray-300 invalid:border-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <p className="relative  w-full p-5">Delivery Information</p>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Destination State
              </label>
              <select
                name="destinationState"
                value={request.destinationState}
                onChange={handleInputChange}
                required
                className="w-full h-11 bg-white rounded border border-gray-300 invalid:text-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="" value="">
                  Select one
                </option>
                {statesList.map((state, i) => (
                  <option key={i} className="" value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Delivery Type
              </label>
              <select
                name="deliveryType"
                value={request.deliveryType}
                required
                onChange={handleInputChange}
                className="w-full h-11 bg-white rounded border border-gray-300 invalid:text-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="" value="">
                  Select one
                </option>

                <option className="" value="To Station">
                  To Station
                </option>
                <option className="" value="To Door">
                  To Door
                </option>
              </select>
            </div>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Service Type
              </label>
              <select
                name="serviceType"
                value={request.serviceType}
                onChange={handleInputChange}
                required
                className="w-full h-11 bg-white rounded border border-gray-300 invalid:border-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="" value="">
                  Select one
                </option>

                <option className="" value="Regular">
                  Regular
                </option>
                <option className="" value="Express">
                  Express
                </option>
              </select>
            </div>
            {request.deliveryType === "To Station" && (
              <div className="relative  w-full md:w-1/2 p-5">
                <label className="leading-7 text-sm text-gray-600">
                  Destination Station
                </label>
                <select
                  name="destinationStation"
                  value={request.destinationStation}
                  onChange={handleInputChange}
                  required
                  className="w-full h-11 bg-white rounded border border-gray-300 invalid:text-red-400  focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option className="" value="">
                    Select one
                  </option>
                  {request.originState
                    ? Object.keys(
                        states[request.destinationState]?.stations
                      )?.map((station, i) => (
                        <option key={i} className="" value={station}>
                          {station}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
            )}
            {request.deliveryType === "To Door" && (
              <div className="relative  w-full md:w-1/2 p-5">
                <label className="leading-7 text-sm text-gray-600">
                  Destination Address
                </label>
                <textarea
                  name="destinationAddress"
                  value={request.destinationAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 invalid:border-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            )}
            <p className="relative  w-full p-5">Shipment Information</p>
            <div className="relative w-1/2 md:w-1/3 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Estimated Weight (KG)
              </label>
              <input
                type="number"
                name="weight"
                value={request.weight}
                required
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 invalid:border-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-1/2 md:w-1/3 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={request.quantity}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative w-1/2 md:w-1/3 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Value (NGN)
              </label>
              <input
                type="value"
                name="value"
                value={request.value}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-full p-5">
              <label className="leading-7 text-sm text-gray-600">
                Item Description
              </label>
              <textarea
                name="description"
                value={request.description}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full bg-white rounded border border-gray-300 0 invalid:border-red-400 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="text-white bg-blue-600 border-0 py-2 px-8 mx-5 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Request Pick Up
          </button>
        </div>
      </div>
      <SuccessModal
        id="success"
        message="Thank tou for submiting your request, we will get back shortly"
      />
    </main>
  );
};

export default PickUpRequest;
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let states;
  let statesList;
  await axios
    .get(`https://server.firstlinelogistics.ng/states`)
    .then((data) => {
      states = data.data;

      statesList = Object.keys(data.data).map((key) => key);
    });

  return {
    props: {
      states,
      statesList,
    },
  };
}

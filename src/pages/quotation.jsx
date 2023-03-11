import { idGenerator } from "@/AppBrain";
import Header1 from "@/components/Header1";
import SuccessModal from "@/components/SuccessModal";
import { db } from "@/firebase/firebase";
import { openModal } from "@/modalcontrol";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
const Quotation = () => {
  const [honeyPot, setHoneypot] = useState("");
  const [formValues, setFormValues] = useState({
    fullName: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    originState: "",
    destinationState: "",
    quantity: "",
    value: "",
    weight: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = () => {
    const {
      fullName,
      phoneNumber,
      email,
      originState,
      destinationState,
      description,
      weight,
    } = formValues;
    if (
      !fullName ||
      !phoneNumber ||
      !email ||
      !originState ||
      !destinationState ||
      !description ||
      !weight
    ) {
      alert("Please fill required inputs");
    } else {
      const templateParams = {
        ...formValues,
      };
      emailjs
        .send(
          "service_p5fagzc",
          "template_uxtyghq",
          templateParams,
          "58HwwGJGNzRfj7V2N"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setFormValues({
              fullName: "",
              businessName: "",
              phoneNumber: "",
              email: "",
              originState: "",
              destinationState: "",
              quantity: "",
              value: "",
              weight: "",
              description: "",
            });
            openModal("quotation-success");
          },
          (err) => {
            console.log("FAILED...", err);
            alert(
              "Mail not sent please check your network and try again or contact us via email or phone call. Thank you"
            );
          }
        );
    }
  };
  return (
    <main>
      <Header1 title="Get a Quote" />

      <div>
        <div className="w-full bg-gray-100 rounded-lg p-8 md:p-20 flex flex-col  mt-10 md:mt-0 pb-20">
          <h2 className="w-full text-gray-900 text-xl font-bold font-body px-5 ">
            Enter the following information
          </h2>
          <p className="w-full text-gray-500 px-5 mb-5">
            We will contact you in minutes
          </p>

          <div className="w-full flex flex-wrap">
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                required
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 invalid:border-red-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                name="name"
                value={honeyPot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Business Name
              </label>
              <input
                type="text"
                value={formValues.businessName}
                name="businessName"
                onChange={handleInputChange}
                className="w-full bg-white  rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formValues.phoneNumber}
                required
                onChange={handleInputChange}
                className="w-full bg-white rounded border invalid:border-red-400 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative  w-full md:w-1/2 p-5">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                required
                onChange={handleInputChange}
                className="w-full bg-white rounded border invalid:border-red-400 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Origin State
              </label>
              <select
                name="originState"
                value={formValues.originState}
                onChange={handleInputChange}
                required
                className="w-full h-11 bg-white rounded border invalid:border-red-400 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="">Select one</option>
                {states.map((state, i) => (
                  <option key={i} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-full md:w-1/2  p-5">
              <label className="leading-7 text-sm text-gray-600">
                Destination State
              </label>
              <select
                name="destinationState"
                onChange={handleInputChange}
                value={formValues.destinationState}
                required
                className="w-full h-11 bg-white rounded border invalid:border-red-400 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option className="">Select one</option>
                <option className="">Select one</option>
                {states.map((state, i) => (
                  <option key={i} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-1/2 md:w-1/3 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Quantity
              </label>
              <input
                type="number"
                value={formValues.quantity}
                name="quantity"
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-1/2 md:w-1/3 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Estimated Weight
              </label>
              <input
                type="number"
                name="weight"
                value={formValues.weight}
                onChange={handleInputChange}
                required
                className="w-full bg-white rounded border invalid:border-red-400 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-1/2 md:w-1/3 p-5">
              <label className="leading-7 text-sm text-gray-600">
                Value (NGN)
              </label>
              <input
                type="number"
                name="value"
                value={formValues.value}
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
                value={formValues.description}
                rows="5"
                onChange={handleInputChange}
                required
                className="w-full bg-white rounded border invalid:border-red-400 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <button
            onClick={() => {
              !honeyPot && handleSubmit();
            }}
            className="text-white bg-blue-600 border-0 py-2 px-8 mx-5 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Get Quote
          </button>
        </div>
      </div>
      <SuccessModal
        id="quotation-success"
        message="Thank tou for submiting your request, we will get back shortly"
      />
    </main>
  );
};

export default Quotation;

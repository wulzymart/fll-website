import React from "react";
const Input = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
  ...otherProps
}) => (
  <div className=" w-full ">
    <input
      className="rounded-lg  w-full py-2 pl-3 text-gray-600 border-solid border-gray-400 border-2 focus:border-1 invalid:border-red-600  disabled:bg-white"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);
export default Input;
